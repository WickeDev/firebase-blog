import {Record} from 'immutable'
import * as actionTypes from 'core/auth/action-types'
import {combineActions, handleActions} from 'redux-actions'

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
    [actionTypes.signOutSuccess]: (state, {payload}) => {
        return new AuthState();
    }
}, new AuthState());

