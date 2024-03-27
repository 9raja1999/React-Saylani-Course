import axios from "axios";

const axiosInstance = axios.create({
    baseURL : 'https://jsonplaceholder.typicode.com/'
})


axiosInstance.interceptors.request.use(
    (config) => {
        console.log('in CONFIG');
        config.headers.Authorization = `Bearer klkjlklkjkljlkj`
        return config
    },
    (error) => {
        console.log('Error', error);
    }
)

export default axiosInstance