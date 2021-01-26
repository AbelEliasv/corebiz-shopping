import axios from 'axios'

export const axiosInstance = axios.create({
    baseURL: 'https://5d8cdb5a443e3400143b4bea.mockapi.io/corebizchile/',
    timeout: 1000,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/vnd.api+json'
    }
});

export default axiosInstance