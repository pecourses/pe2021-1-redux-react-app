import ACTION_TYPES from './actionTypes';

export const increment = () => ({ type: ACTION_TYPES.INCREMENT });

export const decrement = () => ({ type: ACTION_TYPES.DECREMENT });

export const setStep = newStep => ({
  type: ACTION_TYPES.SET_STEP,
  value: newStep,
});

export const createUser = userData => {
  return {
    type: ACTION_TYPES.CREATE_USER,
    userData: userData,
  };
};
