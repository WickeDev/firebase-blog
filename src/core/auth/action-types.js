import {createAction} from 'redux-actions'

export const initAuth = createAction('INIT_AUTH');

export const signInError  = createAction('SIGN_IN_ERROR');

export const signInSuccess  = createAction('SIGN_IN_SUCCESS');

export const signOutSuccess  = createAction('SIGN_OUT_SUCCESS');
