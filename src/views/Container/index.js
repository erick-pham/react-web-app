import React, { Component } from 'react';

const withContainer = WrappedComponent => class NewComponent extends Component {
  render() {
    console.log(this.props);
    return this.props.isLoading ? (<div>loading ...</div>) :
      (
        <WrappedComponent {...this.props} />
      );
  }
};

export default withContainer;