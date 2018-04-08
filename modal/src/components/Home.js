import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { modalShow, modalHide } from '../reducers/modal';
import { withRouter } from 'react-router-dom';

class Home extends Component {
  handleModalShow = () => {
    this.props.actions.modalShow();
  };

  componentWillUnmount() {
    this.props.actions.modalHide();
  }

  render() {
    return (
      <div>
        <h2>Home</h2>
        <button onClick={this.handleModalShow}>open modal</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ modalShow, modalHide }, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
