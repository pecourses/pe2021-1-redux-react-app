import React from 'react';
import { connect } from 'react-redux';
import ACTION_TYPES from '../../actions/actionTypes';
import * as actionCreators from './../../actions';

function Counter (props) {
  const { count, step, dispatch } = props;

  const increment = () => {
    dispatch(actionCreators.increment());
  };

  const decrement = () => {
    dispatch(actionCreators.decrement());
  };

  const setStep = event => {
    dispatch(actionCreators.setStep(Number(event.target.value)));
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

// const withState = connect(mapStateToProps);
// const CounterWithState = withState(Counter);
// export default CounterWithState;

export default connect(mapStateToProps)(Counter);
