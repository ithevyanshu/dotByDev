import { atom, selector } from 'recoil';

export const authState = atom({
    key: 'authState',
    default: {
        isLogged: false,
        accessToken: null,
    }
})

export const isLoggedInSelector = selector({
    key: 'isLoggedInSelector',
    get: ({get}) => {
        const auth = get(authState);
        return auth.isLogged;
    }
})


export const accessTokenSelector = selector({
    key: 'accessTokenSelector',
    get: ({get}) => {
        const auth = get(authState);
        return auth.accessToken;
    }
})