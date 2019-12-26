import axios from 'axios';

// Dynamic signbees api

let signbeesApi

if (process.client) {
    signbeesApi = window.location.href.match(/localhost/) !== null ?
        'https://beta.signbees.com'
        : window.location.href
}

const api = axios.create({
    baseURL: `${signbeesApi}/api`
})

// -----


export const state = () => ({
    isUserLoggedIn: false,
    loading: false,
    isUserEmailExist: { user: '', exist: false },
    signingUp: false,
    mailSent: false,
    ssoLink: '',
    dashboardLink: '',
})

export const getters = {
    isUserLoggedIn(state) {
        return state.isUserLoggedIn;
    },
    isUserEmailExist(state) {
        return state.isUserEmailExist;
    },
    loading(state) {
        return state.loading;
    },
    signingUp(state) {
        return state.signingUp;
    },
    mailSent(state) {
        return state.mailSent
    },
    ssoLink(state) {
        return state.ssoLink;
    },
    dashboardLink(state) {
        return state.dashboardLink;
    }
}

export const mutations = {
    changeUserLoginStatus(state, payload) {
        state.isUserLoggedIn = payload;
    },
    changeLoadingStatus(state, payload) {
        state.loading = payload;
    },
    changeUserEmailExistenceStatus(state, payload) {
        state.isUserEmailExist = payload;
    },
    changeSigningUpStatus(state, payload) {
        state.signingUp = payload;
    },
    changeMailSentStatus(state, payload) {
        state.mailSent = true
    },
    assignSsoLink(state, payload) {
        state.ssoLink = payload;
    },
    assignDashboardLink(state, payload) {
        state.dashboardLink = payload;
    }
}
export const actions = {
    fetchAuthStatus(context, payload) {
        payload.iframe.contentWindow.postMessage(
            { message: 'fetchAuthStatus' },
            context.state.ssoLink
        )
        console.log('inside fetchAuthState')
    },
    signup(context, payload) {
        context.commit('changeLoadingStatus', true);
        const postMsg = {
            message: "signupUser",
            data: payload.newUser,
        }

        payload.vm.$refs.iframe.contentWindow.postMessage(
            postMsg,
            context.state.ssoLink
        );
    },
    checkUserEmail(context, payload) {
        context.commit('changeLoadingStatus', true);

        api.get('/user/check/', {
            params: {
                email: payload.email,
            }
        }).then(response => {
            if (response.data === '') { // If user doesn't exist in db
                context.commit('changeUserEmailExistenceStatus', { user: response.data, exist: false });
                context.commit('changeSigningUpStatus', true);
            } else {
                context.commit('changeUserEmailExistenceStatus', { user: response.data, exist: true })
                context.commit('changeSigningUpStatus', false);
            }
            context.commit('changeLoadingStatus', false);
        })
            .catch(err => console.log(err));
    },
    sendMail(context, payload) {
        context.commit('changeLoadingStatus', true);

        const data = JSON.stringify(payload);
        api.post('/sendMail/salesTeam', data, {
            mode: 'no-cors',
            headers: {
                "Content-Type": "application/json"
            }
        }).then(response => {
            context.commit('changeLoadingStatus', false);
            context.commit('changeMailSentStatus');
        }).catch(err => {
            context.commit('changeLoadingStatus', false);
        })
    },
    assignLink(context, payload) {
        let currOrigin;
        if (process.client) {
            currOrigin = window.location.href;
        }

        if (/beta/.test(currOrigin) || /localhost/.test(currOrigin)) {
            context.commit('assignSsoLink', 'https://sso.beta.signbees.com');
            context.commit('assignDashboardLink', 'https://dashboard.beta.signbees.com/#/')
        } else {
            context.commit('assignSsoLink', "https://sso.signbees.com");
            context.commit('assignDashboardLink', 'https://dashboard.signbees.com/#/')
        }
    }
}