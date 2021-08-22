import ACTION_TYPES from './../actions/actionTypes';

const initialState = {
  users: [],
  isFetching: false,
  error: null,
};

function usersSagaReducer (state = initialState, action) {
  const { type } = action;
  switch (type) {
    case ACTION_TYPES.GET_USERS_REQUEST: {
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    }
    case ACTION_TYPES.GET_USERS_SUCCESS: {
      const { users } = action;
      return {
        ...state,
        isFetching: false,
        users: users,
      };
    }
    // ACTION_TYPES.GET_USERS_ERROR
    case ACTION_TYPES.GET_USERS_ERROR: {
      const { error } = action;
      return {
        ...state,
        isFetching: false,
        error: error,
      };
    }
    case ACTION_TYPES.CREATE_USER_REQUEST: {
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    }
    case ACTION_TYPES.CREATE_USER_SUCCESS: {
      const { user } = action;
      const { users } = state;
      const newUsers = [...users, user];
      return {
        ...state,
        users: newUsers,
        isFetching: false,
      };
    }
    case ACTION_TYPES.CREATE_USER_ERROR: {
      const { error } = action;
      return {
        ...state,
        isFetching: false,
        error,
      };
    }
    default:
      return state;
  }
}

export default usersSagaReducer;
