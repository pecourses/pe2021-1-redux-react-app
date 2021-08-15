import React from 'react';
import { connect } from 'react-redux';
// import ACTION_TYPES from '../../actions/actionTypes';
import * as actionCreators from './../../actions';

function Counter (props) {
  const {
    count,
    step,
    incrementAction,
    decrementAction,
    setStepAction,
  } = props;

  const setStep = event => {
    setStepAction(Number(event.target.value));
  };

  return (
    <article>
      <h1>Count: {count}</h1>
      <input type='number' value={step} onChange={setStep} />
      <button onClick={decrementAction}>-</button>
      <button onClick={incrementAction}>+</button>
    </article>
  );
}

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => {
  return {
    incrementAction: () => {
      dispatch(actionCreators.increment());
    },
    decrementAction: () => {
      dispatch(actionCreators.decrement());
    },
    setStepAction: value => {
      dispatch(actionCreators.setStep(value));
    },
  };
};

// const withState = connect(mapStateToProps);
// const CounterWithState = withState(Counter);
// export default CounterWithState;

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
