import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// Добавить step
const initialState = { count: 0, step: 1 };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'setStep':
      return { step: action.value };
    default:
      return state;
  }
};

const store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

//redux:
// - store:   хранилище js-объектов
// - reducer: pure func: (state, action) => state
//
