import { useState, useEffect } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { ImageGallery } from './ImageGallery/ImageGallery';
import { ButtonLoadMore } from './Button/Button';
import { Modal } from './Modal/Modal';
import { Loader } from './Loader/Loader';
import { EndCart } from './End/End';
import { Box } from './Box';

export function App() {
  const [searchName, setSearchName] = useState('');
  const [page, setPage] = useState(1);
  const [card, setCard] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [status, setStatus] = useState('Ible');
  const [imgUrl, setImgUrl] = useState('');

  useEffect(() => {
    const URL = 'https://pixabay.com/api/';
    const KEY = '29990165-8c350ed327b5f0dec080b7ac6';
    const per_page = 12;

    if (searchName) {
      setStatus('pending');
      fetch(
        `${URL}?q=${searchName}&page=${page}&per_page=${per_page}&key=${KEY}&image_type=photo&orientation=horizontal`
      )
        .then(r => r.json())
        .then(card => {
          if (card.hits.length === 0) {
            setStatus('reject');
            toast.error('Nothing found on request');
            return;
          }
          setCard(prevState => {
            return page === 1
              ? [
                  ...card.hits.map(({ id, webformatURL, largeImageURL }) => ({
                    id,
                    webformatURL,
                    largeImageURL,
                  })),
                ]
              : [
                  ...prevState,
                  ...card.hits.map(({ id, webformatURL, largeImageURL }) => ({
                    id,
                    webformatURL,
                    largeImageURL,
                  })),
                ];
          });
          setStatus('resolv');
        })
        .catch(err => err);
    }
  }, [searchName, page]);

  const handleIncrementPage = () => {
    setPage(prevState => prevState + 1);
  };

  const handleFormSubmit = searchName => {
    setSearchName(searchName);
    setPage(1);
    setCard([]);
  };

  const toggleModal = () => setShowModal(showModal => !showModal);

  const imgWindowModal = imgUrl => {
    setImgUrl(imgUrl);
    toggleModal();
  };

  return (
    <Box as="main" px={4} pb={3} textAlign="center">
      <Searchbar onSubmit={handleFormSubmit} />

      {(status === 'resolv' || status === 'pending') && card && (
        <ImageGallery images={card} onClick={imgWindowModal} />
      )}

      {card.length > 0 && status === 'resolv' && card.length % 12 === 0 && (
        <ButtonLoadMore onClick={handleIncrementPage} />
      )}

      {card.length % 12 !== 0 && <EndCart />}

      {status === 'pending' && <Loader />}

      {showModal && (
        <Modal onClose={toggleModal}>
          <img src={imgUrl} alt="" />
        </Modal>
      )}
      <ToastContainer />
    </Box>
  );
}
