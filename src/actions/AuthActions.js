import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOG_IN_USER,
    LOG_IN_USER_SUCCESS,
    LOG_IN_USER_FAIL
} from './types';

export const emailChanged = (text) => {
    let action = {
        type: EMAIL_CHANGED,
        payload: text
    };

    return action;
};

export const passwordChanged = (text) => {
    let action = {
        type: PASSWORD_CHANGED,
        payload: text
    };

    return action;
};

export const logInUser = ({ email, password }) => {
    let action = {
        type:LOG_IN_USER
    };

    return (dispatch) => {
        dispatch(action);

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => logInUserSuccess(dispatch, user))
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                .then(user => logInUserSuccess(dispatch, user))
                .catch(() => logInUserFail(dispatch));
            });
    };
};

const logInUserFail = (dispatch) => {
    let action = {
        type: LOG_IN_USER_FAIL,
        payload: 'Authentication failed'
    };

    dispatch(action);
};

const logInUserSuccess = (dispatch, user) => {
    let action = {
        type: LOG_IN_USER_SUCCESS,
        payload: user
    };

    dispatch(action);

    Actions.main();
};
