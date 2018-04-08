import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Switch, Route, withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import { modalHide } from '../reducers/modal';

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
  padding: 20px;
`;

class Modal extends Component {
  handleModalHide = () => {
    this.props.actions.modalHide();
  };

  render() {
    return (
      <div>
        {this.props.modalShow && (
          <Background>
            <Contents>
              <Switch>
                <Route exact path="/" render={() => <div>Home Modal</div>} />
                <Route
                  exact
                  path="/about"
                  render={() => <div>About Modal</div>}
                />
              </Switch>
              <div>
                <button onClick={this.handleModalHide}>close modal</button>
              </div>
            </Contents>
          </Background>
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    modalShow: state.modal.show
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ modalHide }, dispatch)
  };
}

// 前のページのモーダルが残ってしまう。
// export default connect(mapStateToProps, mapDispatchToProps)(Modal);

// withRouterを使えばswitchは効くがモーダルがそのまま残ってしまう。
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Modal));
