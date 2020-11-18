// import React from 'react';
// import Input from './Input';
// import { shallow, configure } from 'enzyme';
// import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
//
// configure({ adapter: new Adapter() });
//
// describe('<Input />', () => {
//   it('성공적으로 렌더링되어야 합니다.', () => {
//     const wrapper = shallow(<Input />);
//     expect(wrapper.length).toBe(1);
//   });
// });

import React from 'react';
import renderer from 'react-test-renderer';
import { createSerializer } from '@emotion/jest';
import styled from '@emotion/styled';
import Input from './Input';
import { ThemeProvider } from '@emotion/react';
import { theme } from '../../../style';
import { shallow, mount } from 'enzyme';

expect.addSnapshotSerializer(createSerializer());

let wrapper: any;

beforeEach(() => {
  wrapper = mount(
    <ThemeProvider theme={theme}>
      <Input />)
    </ThemeProvider>,
  );
});

describe('First React component test with Enzyme', () => {
  it('renders without crashing', () => {
    expect(wrapper.find('input')).toHaveLength(1);
  });
});
