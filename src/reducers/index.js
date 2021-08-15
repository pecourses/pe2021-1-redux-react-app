import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import usersReducer from './usersReducer';

const rootReducer = combineReducers({
  counter: counterReducer,
  userState: usersReducer,
});

export default rootReducer;
// const initialState = {
//   counter: {
//     count: 0,
//     step: 1,
//   },
//   userState: {
//     users: [
//       {
//         name: 'Myself',
//         telNumber: '+380123456789',
//         isBanned: false,
//       },
//     ],
//   },
// };
