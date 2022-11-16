import { OverlayDiv, ModalDiv } from "./Modal.styled";
import PropTypes from 'prop-types';
import {useEffect} from "react";
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root')

export function Modal ({onClose, children}){

  useEffect(() => {
    const handleKeyDown  = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    }; 
  }, [onClose]) 




  const handleOverlayClick = ({ currentTarget, target }) => {
    if (currentTarget === target) {
      onClose();
    }
  };


    return  createPortal(
    <OverlayDiv onClick={handleOverlayClick}>
        <ModalDiv>
        {children}
        </ModalDiv>
    </OverlayDiv>, modalRoot
        )
    }


Modal.propTypes ={
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
}