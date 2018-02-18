import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import Move from '../Move';

Enzyme.configure({ adapter: new Adapter() });

describe('Move component', () => {

    it('renders pulsing icon when user doesn\'t have a selected option', () => {
        const wrapper = shallow(<Move selectedOption={ '' } />); 
        expect(toJson(wrapper)).toMatchSnapshot();
    });
    
    it('renders Rock icon when user has selected Rock', () => {
        const mockUserMove = {
            text: 'Rock',
            icon: '👊',
          }
        const wrapper = shallow(<Move selectedOption={ mockUserMove } />); 
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('renders Paper icon when user has selected Paper', () => {
        const mockUserMove = {
            text: 'Paper',
            icon: '✋️',
          }
        const wrapper = shallow(<Move selectedOption={ mockUserMove } />); 
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('renders Scissors icon when user has selected Scissors', () => {
        const mockUserMove = {
            text: 'Scissors',
            icon: '✌️',
          }
        const wrapper = shallow(<Move selectedOption={ mockUserMove } />); 
        expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
  