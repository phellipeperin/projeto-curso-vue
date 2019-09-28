import apiInstance from './apiInstance';

export default {
    name: 'api',
    methods: {
        get(url) { return apiInstance.get(url); },
        post(url, data) { return apiInstance.post(url, data); },
        put(url, data) { return apiInstance.put(url, data); },
        delete(url) { return apiInstance.delete(url); },
    },
};
