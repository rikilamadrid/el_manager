import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOG_IN_USER,
    LOG_IN_USER_SUCCESS,
    LOG_IN_USER_FAIL
} from '../actions/types';

const INTIAL_STATE = {
    email: '',
    password: '',
    user: null,
    error: '',
    loading: false
};

export default (state = INTIAL_STATE, action) => {
    console.log(action);

    switch (action.type) {
        case EMAIL_CHANGED:
            return { ...state, email: action.payload };
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload };
        case LOG_IN_USER:
            return { ...state, loading: true, error: '' };
        case LOG_IN_USER_SUCCESS:
            return { ...state, ... INTIAL_STATE, user: action.payload };
        case LOG_IN_USER_FAIL:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};
