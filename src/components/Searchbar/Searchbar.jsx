import React from "react";
import {  toast } from 'react-toastify';
import { SearchBarHeader, SearchForm, SearchFormButton, SearchFormButtonLabel, SearchFormInput } from "./Searchbar.styled";

import { FcSearch } from "react-icons/fc";

export class Searchbar extends React.Component{

  
  state = {
    searchName: ''
  }

  handleSearchNameChange = e => {
    this.setState({
      searchName: e.target.value.toLowerCase()
    });
  }


handleSubmit = e => {
e.preventDefault();
if(this.state.searchName.trim() === ''){
  toast.error("Enter search images and photos ");
  return;
}
this.props.onSubmit(this.state.searchName);
this.setState({ searchName: ''})

}

  render(){
    return (<SearchBarHeader  >
      <SearchForm onSubmit={this.handleSubmit}  >
        <SearchFormButton type="submit">
        <FcSearch size={24}/>
          <SearchFormButtonLabel >  Search</SearchFormButtonLabel>
        </SearchFormButton>
    
        <SearchFormInput
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={this.state.searchName}
          onChange={this.handleSearchNameChange}
        />
      </SearchForm>
    </SearchBarHeader>)
  }
}
   
