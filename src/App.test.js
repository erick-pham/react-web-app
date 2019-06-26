/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';

import { shallow, configure } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

import Adapter from 'enzyme-adapter-react-16';

import { Route, } from 'react-router-dom';
import PrivateRoute from './helpers/authentication';

configure({ adapter: new Adapter() });

const mockStore = configureMockStore();
const store = mockStore({
  auth: {
    token: ''
  },
  api: {
    isLoading: false
  }
});

describe('Test APP', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should render 7 routes', () => {
    const token = 'aaaaaaaaa';
    const wrapper = shallow(< App />);
    wrapper.setProps({ token: token });

    wrapper.find(PrivateRoute).map(element => {
      expect(element.prop('token')).toEqual(token);
    });
    expect(wrapper.find(Route)).toHaveLength(7);
  });

  it('should render first element as ErrorBoundary', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.name()).toEqual('ErrorBoundary');
  });

});