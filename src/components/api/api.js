const axios = require('axios');

const axiosInstance = axios.create({
    baseURL: 'https://www.googleapis.com/books/v1',
});

export default {
    name: 'api',
    methods: {
        get(url) { return axiosInstance.get(url); },
        post(url, data) { return axiosInstance.post(url, data); },
        put(url, data) { return axiosInstance.put(url, data); },
        delete(url) { return axiosInstance.delete(url); },
    },
};
