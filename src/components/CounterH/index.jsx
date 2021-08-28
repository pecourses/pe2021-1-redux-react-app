import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from './../../actions';

function CounterH () {
  const { count, step } = useSelector(state => state.counter);
  const dispatch = useDispatch();
  const { increment, decrement, setStep } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const setStepHendler = ({ target: { value } }) => setStep(Number(value));

  return (
    <article>
      <h1>Count: {count}</h1>
      <input type='number' value={step} onChange={setStepHendler} />
      <button onClick={() => decrement()}>-</button>
      <button onClick={() => increment()}>+</button>
    </article>
  );
}

export default CounterH;
