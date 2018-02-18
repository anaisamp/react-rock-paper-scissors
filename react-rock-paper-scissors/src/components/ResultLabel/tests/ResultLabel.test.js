import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import ResultLabel from '../ResultLabel';

Enzyme.configure({ adapter: new Adapter() });

describe('ResultLabel component', () => {

    it('displays "You win!" message in green if the winner is the user (1)', () => {
        const wrapper = shallow(<ResultLabel winner={ 1 } />); 
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('displays "Computer wins" message in red if the winner is the computer (2)', () => {
        const wrapper = shallow(<ResultLabel winner={ 2 } />); 
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('displays "Tied" message in bold if tied (0)', () => {
        const wrapper = shallow(<ResultLabel winner={ 0 } />); 
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('displays "Fight!" message if the game didn\'t start', () => {
        const wrapper = shallow(<ResultLabel winner={ null } />); 
        expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
  