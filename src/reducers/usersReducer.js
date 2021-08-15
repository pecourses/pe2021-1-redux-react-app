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
      return { users: newUsers };
    }
    case ACTION_TYPES.DELETE_USER: {
      const { users } = state;
      const { id } = action;

      const newUsers = [...users];
      newUsers.splice(
        newUsers.findIndex(u => id === u.id),
        1
      );

      return { users: newUsers };
    }
    case ACTION_TYPES.UPDATE_USER: {
      const { users } = state;
      const { newInfo: newUserInfo } = action;
      const newUsers = [...users];

      const index = newUsers.findIndex(u => newUserInfo.id === u.id);
      newUsers[index] = {
        ...newUsers[index],
        // isBanned: newUserInfo.isBanned,
        ...newUserInfo,
      };

      return { users: newUsers };
    }
    default:
      return state;
  }
};

export default usersReducer;
