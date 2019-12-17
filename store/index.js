import Vuex from 'vuex';
import { auth } from '~/plugins/firebase.js';

export const state = () => ({
    isUserLoggedIn: false,
    loading: false,
})

export const getters = {
    isUserLoggedIn(state) {
        return state.isUserLoggedIn;
    },
    loading(state) {
        return state.loading;
    }
}

export const mutations = {
    changeUserLoginStatus(state, payload) {
        state.isUserLoggedIn = payload;
    },
    changeLoadingStatus(state, payload) {
        state.loading = payload;
    }
}
export const actions = {
    signup(context, payload) {
        context.commit('changeLoadingStatus', true);
        const postMsg = {
            message: "signupUser",
            data: payload.newUser,
        }

        payload.vm.$refs.iframe.contentWindow.postMessage(
            postMsg,
            'https://sso.beta.signbees.com'
        );
    }
}