export const getAuth = (state) => {
    return state.auth;
};

export const isAuthenticated = (state) => {
    return getAuth(state).authenticated;
};