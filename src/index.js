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
      return {
        ...state,
        count: state.count + state.step,
      };
    case 'decrement':
      return {
        ...state,
        count: state.count - state.step,
      };
    case 'setStep':
      return {
        ...state,
        step: action.value,
      };
    default:
      return state;
  }
};
// {
//   count: 1;
// }
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
// - createStore: ф-я для создания store (state+reducer)
// - store:    хранилище js-объектов + логика их изменения
// - reducer:  pure func: (state, action) => state
// - dispatch: функция, кот. отправляет action в store (reducer)
// - action:   js-object {type: 'string', ...bag }
//react-redux:
// - connect: HOC, пробрасывает нужную часть состояния в пропсы компонента
// - mapStateToProps: функция: что конкретно взять из state
// - Provider: дает теоретический доступ дерева App к состоянию
