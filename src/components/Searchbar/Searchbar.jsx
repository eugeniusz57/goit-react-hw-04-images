import{useState}from "react";
import {  toast } from 'react-toastify';
import { SearchBarHeader, SearchForm, SearchFormButton, SearchFormButtonLabel, SearchFormInput } from "./Searchbar.styled";

import { FcSearch } from "react-icons/fc";

export function Searchbar ({onSubmit}) {
const [searchName, setSearchName] = useState('')
  

  const handleSearchNameChange = e => setSearchName(e.target.value.toLowerCase());
  


const handleSubmit = e => {
e.preventDefault();
if(searchName.trim() === ''){
  toast.error("Enter search images and photos ");
  return;
}
onSubmit(searchName);
setSearchName('')

}

    return (<SearchBarHeader  >
      <SearchForm onSubmit={handleSubmit}  >
        <SearchFormButton type="submit">
        <FcSearch size={24}/>
          <SearchFormButtonLabel >  Search</SearchFormButtonLabel>
        </SearchFormButton>
    
        <SearchFormInput
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={searchName}
          onChange={handleSearchNameChange}
        />
      </SearchForm>
    </SearchBarHeader>)
  }

   
