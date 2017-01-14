import {Record} from 'immutable'
import {combineActions, handleActions} from 'redux-actions'

import * as actionTypes from './action-types'

export const AuthState = new Record({
    authenticated: false,
    id: null
});

export const authReducer = handleActions({
    [combineActions(
        actionTypes.initAuth,
        actionTypes.signInSuccess
    )]: (state, {payload}) => {
        return state.merge({
            authenticated: !!payload,
            id: payload ? payload.uid : null
        });
    },
    [actionTypes.signOutSuccess]: () => {
        console.log(actionTypes.signOutSuccess);
        return new AuthState();
    }
}, new AuthState());

