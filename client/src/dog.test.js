import React from 'react';
import { render } from '@testing-library/react';
import { configure } from 'enzyme';
import CreateBreed from './containers/CreateBreed/CreateBreed';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { Provider } from "react-redux"
import store from "./Redux/Store/index"

const ReduxWrapper = ({ children }) => (
  <Provider store={store}>
    {children}
  </Provider>
);


configure({adapter: new Adapter()});

describe('<CreateBreed /> Mounted', () => {
  it('El formulario debe tener un input con name "name" y type "text"', () => {
      const { container } = render(<CreateBreed />, 
        { wrapper: ReduxWrapper },
        );
      const element = container.querySelectorAll('input')[0]
     expect(element.type).toBe('text');
     expect(element.name).toBe('name');
  });

  it('El formulario debe tener un input con name "weight" y type "number"', () => {
    const { container } = render(<CreateBreed/>,{ wrapper: ReduxWrapper },);
    const element = container.querySelectorAll('input')[1]
    expect(element.type).toBe('number');
    expect(element.name).toBe('weight');
  });

  it('El formulario debe tener un input con name "height" y type "number"', () => {
    const { container } = render(<CreateBreed/>,{ wrapper: ReduxWrapper },);
    const element = container.querySelectorAll('input')[2]
    expect(element.type).toBe('number');
    expect(element.name).toBe('height');
  });

  it('El formulario debe tener un input con name "life_span" y type "number"', () => {
    const { container } = render(<CreateBreed/>,{ wrapper: ReduxWrapper },);
    const element = container.querySelectorAll('input')[3]
    expect(element.type).toBe('number');
    expect(element.name).toBe('life_span');
  });

});