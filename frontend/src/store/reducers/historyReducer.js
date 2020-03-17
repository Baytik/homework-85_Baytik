import {FETCH_TRACKS_HISTORY} from "../actions/trackActions";

const initialState = {
    tracksHistories: [],
};

const registerReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_TRACKS_HISTORY:
            return {...state, tracksHistories: action.track};
        default:
            return state;
    }
};

export default registerReducer;