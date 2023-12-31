import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://restcountries.com/v3.1',
    timeout: 100000,
    headers: {'X-Custom-Header': 'foobar'}
});

export default axiosInstance