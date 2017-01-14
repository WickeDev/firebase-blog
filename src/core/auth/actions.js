import firebase from 'firebase'
import  {firebaseAuth} from 'core/firebase'
import * as actionTypes from 'core/auth/action-types'

export const initAuth = (dispatch) => {
    return new Promise((resolve, reject) => {
        const unSub = firebaseAuth.onAuthStateChanged(
            user => {
                dispatch(actionTypes.initAuth(user));
                unSub();
                resolve();
            },
            error => reject(error)
        );
    });
};

const authenticate = (provider) => (dispatch) => {
    return firebaseAuth.signInWithPopup(provider)
        .then(result => dispatch(actionTypes.signInSuccess(result)))
        .catch(error => dispatch(actionTypes.signInError(error)))
};

export const signInWithGithub = () => {
    return authenticate(new firebase.auth.GithubAuthProvider());
};

export const signInWithGoogle = () => {
    return authenticate(new firebase.auth.GoogleAuthProvider());
};

export const signInWithTwitter = () => {
    return authenticate(new firebase.auth.TwitterAuthProvider());
};

export const signOut = () => (dispatch) => {
    return firebaseAuth.signOut()
        .then(() => dispatch(actionTypes.signOutSuccess()));
};