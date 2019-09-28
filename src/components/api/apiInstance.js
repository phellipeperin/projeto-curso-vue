const axios = require('axios');

const axiosInstance = axios.create({
    baseURL: 'https://www.googleapis.com/books/v1',
});

export default axiosInstance;
