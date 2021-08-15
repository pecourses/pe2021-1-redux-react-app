import ACTION_TYPES from '../actions/actionTypes';

const initialState = {
  users: [
    {
      name: 'Myself',
      telNumber: '+380123456789',
      isBanned: false,
    },
  ],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default usersReducer;
