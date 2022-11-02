import { OverlayDiv, ModalDiv } from "./Modal.styled";
import PropTypes from 'prop-types';
import React from "react";
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root')

export class Modal extends React.Component{

    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown);
      }
    
      componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown);
      }
    
      handleKeyDown = e => {
        if (e.code === 'Escape') {
          this.props.onClose();
        }
      };


handleOverlayClick = ({ currentTarget, target }) => {
    if (currentTarget === target) {
      this.props.onClose();
    }
  };

    render(){
        return  createPortal(
    <OverlayDiv onClick={this.handleOverlayClick}>
        <ModalDiv>
        {this.props.children}
        </ModalDiv>
    </OverlayDiv>, modalRoot
        )
    }
}

Modal.propTypes ={
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
}