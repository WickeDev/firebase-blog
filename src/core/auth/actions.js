import firebase from 'firebase'
import  {firebaseAuth} from 'core/firebase'
import * as actionTypes from 'core/auth/action-types'

export const initAuth = (dispatch) => {
    return new Promise((resolve, reject) => {
        const unsub = firebaseAuth.onAuthStateChanged(
            user => {
                dispatch(actionTypes.initAuth(user));
                unsub();
                resolve();
            },
            error => reject(error)
        );
    });
};

const authenticate = (provider) => (dispatch) => {
    firebaseAuth.signInWithPopup(provider)
        .then(result => dispatch(actionTypes.signOutSuccess(result)))
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
    firebaseAuth.signOut()
        .then(() => dispatch(actionTypes.signOutSuccess));
};