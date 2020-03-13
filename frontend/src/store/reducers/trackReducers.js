import {FETCH_TRACKS_SUCCESS} from "../actions/trackActions";

const initialState = {
    tracks: [],
};

const trackReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_TRACKS_SUCCESS:
            return {...state, tracks: action.tracks};
        default:
            return state;
    }
};

export default trackReducer;