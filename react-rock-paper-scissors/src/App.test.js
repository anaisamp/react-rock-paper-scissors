import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import { mockRandom, resetMockRandom } from 'jest-mock-random';
import App, { getRandomNumber, getWinner } from './App';

Enzyme.configure({ adapter: new Adapter() });

describe('App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders initial state before game start', () => {
    const wrapper = shallow(<App />); 
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

describe('App after a user play', () => {
  it('displays the user move', () => {
    const mockUserMove = {
        text: 'Rock',
        icon: '👊',
    }
    const wrapper = mount(<App />); 
    const selectedIcon = wrapper.find(`.${mockUserMove.text}`);

    selectedIcon.simulate('click');
    expect(wrapper.state().userMove).toEqual(mockUserMove);
    expect(wrapper.find('.movedIcon').first().text()).toEqual(mockUserMove.icon);
  });

  it('displays the computer move', () => {
    mockRandom([0]);

    const mockUserMove = {
        text: 'Rock',
        icon: '👊',
    }
    const mockComputerMove = {
      text: 'Rock',
      icon: '👊',
    }
    const wrapper = mount(<App />); 
    const selectedIcon = wrapper.find(`.${mockUserMove.text}`);

    selectedIcon.simulate('click');
    expect(wrapper.state().computerMove).toEqual(mockComputerMove);
    expect(wrapper.find('.movedIcon').last().text()).toEqual(mockComputerMove.icon);

    resetMockRandom();
  });

  it('updates user points when user wins', () => {
    mockRandom([0]);

    const mockUserMove = {
        text: 'Paper',
    }
    const wrapper = shallow(<App />); 
    const selectedIcon = wrapper.find(`.${mockUserMove.text}`);

    selectedIcon.simulate('click');
    expect(wrapper.state().winner).toEqual(1);
    expect(wrapper.state().userWins).toEqual(1);
    expect(wrapper.state().computerWins).toEqual(0);
  
    resetMockRandom();
  });

  it('doesn\'t update points if tied', () => {
    mockRandom([0.34]);

    const mockUserMove = {
        text: 'Paper',
    }
    const wrapper = shallow(<App />); 
    const selectedIcon = wrapper.find(`.${mockUserMove.text}`);
  
    selectedIcon.simulate('click');
    expect(wrapper.state().winner).toEqual(0);
    expect(wrapper.state().userWins).toEqual(0);
    expect(wrapper.state().computerWins).toEqual(0);
  
    resetMockRandom();
  });

  it('updates computer points when computer wins', () => {
    mockRandom([0.67]);

    const mockUserMove = {
        text: 'Paper',
    }
    const wrapper = shallow(<App />); 
    const selectedIcon = wrapper.find(`.${mockUserMove.text}`);

    selectedIcon.simulate('click');

    expect(wrapper.state().winner).toEqual(2);
    expect(wrapper.state().userWins).toEqual(0);
    expect(wrapper.state().computerWins).toEqual(1);

    resetMockRandom();
  });
});

describe('getRandomNumber', () => {
  it('returns a random number between x and y', () => {
    const x = 1;
    const y = 3;
  
    expect(getRandomNumber(y,x)).toBeGreaterThanOrEqual(x);
    expect(getRandomNumber(y,x)).toBeLessThanOrEqual(y);
  })
});

describe('getWinner', () => {
  it('computes tied result for equal moves', () => {
    const mockUserMove = {
        text: 'Rock',
    }
    const mockComputerMove = {
      text: 'Rock',
    }
    const winner = getWinner(mockUserMove.text, mockComputerMove.text);

    expect(winner).toEqual(0);
  });

  it('computes user as winner', () => {
    const mockUserMove = {
        text: 'Paper',
    }
    const mockComputerMove = {
      text: 'Rock',
    }
    const winner = getWinner(mockUserMove.text, mockComputerMove.text);

    expect(winner).toEqual(1);
  });

  it('computes computer as winner', () => {
    const mockUserMove = {
        text: 'Paper',
    }
    const mockComputerMove = {
      text: 'Scissors',
    }
    const winner = getWinner(mockUserMove.text, mockComputerMove.text);

    expect(winner).toEqual(2);
  });
});