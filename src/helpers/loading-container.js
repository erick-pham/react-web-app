import React, { Component } from 'react';

const withLoading = WrappedComponent => class NewComponent extends Component {
  render() {
    return this.props.isLoading ? (<div>loading ...</div>) :
      (
        <WrappedComponent {...this.props} />
      );
  }
};

export default withLoading;