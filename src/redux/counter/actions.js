import getRandom from '../../services/randomMock';

import {
  INCREASE_COUNTER,
  DECREASE_COUNTER,
  RESET_COUNTER,
  SET_COUNTER,
  LOADING_COUNTER,
  ERROR_COUNTER
} from './types'

export const increaseCounterByOne = () => (
  {
    type: INCREASE_COUNTER,
    payload: 1
  }
);

export const decreaseCounterByOne = () => (
  {
    type: DECREASE_COUNTER,
    payload: 1
  }
);

export const resetCounter = () => (
  {
    type: RESET_COUNTER,
    payload: 1
  }
);

export const setRandomCounter = (maxValue) => {
  return async (dispatch) => {
    dispatch({ type: LOADING_COUNTER })
    try {
      const apiResult = await getRandom(maxValue);
      dispatch({ type: SET_COUNTER, payload: apiResult })
    } catch (error) {
      dispatch({ type: ERROR_COUNTER })
    }
  }
}