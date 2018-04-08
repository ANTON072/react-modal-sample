import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { bindActionCreators } from 'redux';

import { modalHide } from '../reducers/modal';

const modalRoot = document.getElementById('modal-root');

const Background = styled.div`
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;

const Contents = styled.div`
  background: #fff;
  width: 500px;
  height: 200px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  padding: 20px;s
`;

class Modal extends React.Component {
  handleClose = () => {
    this.props.onClose();
  };

  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }

  componentDidMount() {
    modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(
      <Background>
        <Contents>
          {this.props.children}
          <p>
            <button onClick={this.handleClose}>modal close</button>
          </p>
        </Contents>
      </Background>,
      this.el
    );
  }
}

export default Modal;
