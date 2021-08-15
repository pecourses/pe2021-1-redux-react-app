import ACTION_TYPES from '../actions/actionTypes';

const initialState = {
  users: [
    {
      id: Date.now(),
      name: 'Myself',
      telNumber: '+380123456789',
      isBanned: false,
    },
  ],
};

const usersReducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case ACTION_TYPES.CREATE_USER: {
      const { userData } = action;
      const { users } = state;

      const newUser = {
        ...userData,
        id: Date.now(),
        isBanned: false,
      };

      const newUsers = [...users, newUser];
      return newUsers;
    }
    default:
      return state;
  }
};

export default usersReducer;
