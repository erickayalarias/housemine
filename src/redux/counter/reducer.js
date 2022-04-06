import INITIAL_STATE from "./state";
import {
  INCREASE_COUNTER,
  DECREASE_COUNTER,
  RESET_COUNTER,
  SET_COUNTER,
  LOADING_COUNTER,
  ERROR_COUNTER
} from './types'

const reducer =  (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case INCREASE_COUNTER: 
      return { ...state, status: 'ok', value: state.value + action.payload };

    case DECREASE_COUNTER:
      return { ...state, status: 'ok', value: state.value - action.payload };
    
    case RESET_COUNTER:
      return INITIAL_STATE;
    
    case SET_COUNTER:
      return { ...state, status: 'ok', value: action.payload };
    
    case LOADING_COUNTER:
      return { ...state, status: 'loading' };

    case ERROR_COUNTER:
      return { ...state, status: 'error' };

    default: 
      return state;
  }
}

export default reducer;
