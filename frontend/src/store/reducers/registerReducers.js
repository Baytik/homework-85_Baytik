import {LOGIN_USER_ERROR, LOGIN_USER_SUCCESS} from "../actions/registerActions";

const initialState = {
    tracks: [],
    user: null,
    loginError: null
};

const registerReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_USER_SUCCESS:
            return {...state, user: action.user, loginError: null};
        case LOGIN_USER_ERROR:
            return {...state, loginError: action.error};
        default:
            return state;
    }
};

export default registerReducer;