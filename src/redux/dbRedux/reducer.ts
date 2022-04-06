import INITIAL_REAL_STATE from "./state";
import { INFO_ESTATE } from "./types";

const reducerRealEstate = (state = INITIAL_REAL_STATE, action) => {
    console.log(action);
    switch (action.type) {
        case INFO_ESTATE:
            return { ...state };
        default:
            return state;
    }
};

export default reducerRealEstate;
