import { createStore } from 'redux';
import reducer from '../reducers';

const store = createStore(reducer);

export default store;

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
