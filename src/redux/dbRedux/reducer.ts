import INITIAL_REAL_STATE from "./state";
import { INFO_ESTATE, UPDATE_SEARCH} from "./types";


const reducerRealEstate = (state = INITIAL_REAL_STATE, action) => {
    const { type, payload } = action;
    
    switch (type) {
        case INFO_ESTATE:
            return { ...state, realstate: payload };
        case UPDATE_SEARCH:
            return{...state, searchFilter:payload}
        default:
            return state;
    }
};

export default reducerRealEstate;
