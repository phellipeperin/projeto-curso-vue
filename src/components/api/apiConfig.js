import apiInstance from './apiInstance';

export default {
    name: 'apiConfig',
    methods: {
        createInterceptors() {
            apiInstance.interceptors.request.use((config) => {
                const newConfig = config;
                // newConfig.headers.Authorization = this.$store.state.authToken;

                if (newConfig.url.indexOf('?') !== -1) newConfig.url += '&';
                else newConfig.url += '?';

                newConfig.url += `key=${this.$store.state.authToken}`;

                return newConfig;
            }, () => {
                this.$store.commit('showErrorMessage', 'Ops! Houve um problema ao enviar a requisição');
            });

            apiInstance.interceptors.response.use(response => response, () => {
                this.$store.commit('showErrorMessage', 'Ops! Houve um problema com a sua requisição.');
            });
        },
    },
};
