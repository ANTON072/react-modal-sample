import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { modalShow } from '../reducers/modal';

import Modal from './Modal';

class Home extends Component {
  state = {
    isModalShow: false
  }

  handleModalShow = () => {
    this.setState({isModalShow: true})
  };

  handleModalHide = () => {
    this.setState({isModalShow: false})
  }

  render() {
    return (
      <div>
        <h2>Home</h2>
        <button onClick={this.handleModalShow}>open modal</button>
        {this.state.isModalShow && (
          <Modal onClose={this.handleModalHide}>
            <div>modal home</div>
          </Modal>
        )}
      </div>
    );
  }
}

export default Home;
