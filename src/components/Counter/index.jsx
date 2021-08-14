import React from 'react';
import { connect } from 'react-redux';
import ACTION_TYPES from '../../actions/actionTypes';

function Counter (props) {
  const { count, step, dispatch } = props;

  const increment = () => {
    // action - js-object {type: 'string' }
    const action = { type: ACTION_TYPES.INCREMENT };
    dispatch(action);
  };

  const decrement = () => {
    const action = { type: ACTION_TYPES.DECREMENT };
    dispatch(action);
  };

  const setStep = event => {
    const action = {
      type: ACTION_TYPES.SET_STEP,
      value: Number(event.target.value),
    };
    dispatch(action);
  };

  return (
    <article>
      <h1>Count: {count}</h1>
      <input type='number' value={step} onChange={setStep} />
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </article>
  );
}

const mapStateToProps = state => state;

const withState = connect(mapStateToProps);

const CounterWithState = withState(Counter);

export default CounterWithState;
