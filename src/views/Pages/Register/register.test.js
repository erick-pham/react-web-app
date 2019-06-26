/* eslint-disable no-undef */
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import Register from './';

configure({ adapter: new Adapter() });

describe('Test APP', () => {
  it('renders without crashing', () => {
    shallow(<Register />);
  });

  it('email, password must be required', () => {
    const wrapper = shallow(< Register />);

    const email = wrapper.find('#inputEmail');
    const password = wrapper.find('#inputPassword');
    const repeatPassword = wrapper.find('#inputRepeatPassword');

    const mockData = {
      email: 'bossdiemmaimai@gmail.com',
      password: '12345',
      repeatPassword: '12345'
    };

    email.simulate('change', {
      target: { value: mockData.email }
    });
    password.simulate('change', {
      target: { value: mockData.password }
    });
    repeatPassword.simulate('change', {
      target: { value: mockData.repeatPassword }
    });

    expect(wrapper.state().email).toEqual(mockData.email);
    expect(wrapper.state().password).toEqual(mockData.password);
    expect(wrapper.state().repeatPassword).toEqual(mockData.repeatPassword);
    expect(wrapper.state().passwordError).toEqual('');
  });

  it('validate email, password', () => {
    const wrapper = shallow(< Register />);

    const email = wrapper.find('#inputEmail').first();
    const password = wrapper.find('#inputPassword').first();
    const repeatPassword = wrapper.find('#inputRepeatPassword').first();
    // const form = wrapper.find('form').first();

    const mockData = {
      email: 'bossdiemmaimai@gmail.com',
      password: '12345',
      repeatPassword: '12345'
    };

    email.simulate('change', {
      target: { value: mockData.email }
    });
    password.simulate('change', {
      target: { value: mockData.password }
    });
    repeatPassword.simulate('change', {
      target: { value: mockData.repeatPassword }
    });
    //form.simulate('submit', { preventDefault() { } });

    // console.log(form.name());
    // expect(wrapper.state().password).toEqual(mockData.password);
    // expect(wrapper.state().repeatPassword).toEqual(mockData.repeatPassword);
    // expect(wrapper.state().passwordError).toEqual('');
  });


});