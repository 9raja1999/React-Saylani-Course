import axios from "axios";

const axiosHandler = axios.create({
    baseURL: 'https://dummyjson.com'
})


axiosHandler.interceptors.request.use(
    (config) => {
        const user = JSON.parse(sessionStorage.getItem('user'))

        let headersObject = {
            "Content-Type": 'application/json'
        }

        if(user && user.token) {
            headersObject["Authorization"] = `Bearer ${user.token}`
        }

        return {
            ...config,
            headers : {
                ...headersObject
            }
        }
    },
    (error) => {
        return Promise.reject(error)
    }
)


axiosHandler.interceptors.response.use(
    (response) => {
        return response
    },
    (error) => {
        if (error.status == 401) {
            window.location.href = '/'
        }
        return Promise.reject(error)
    }
)


export default axiosHandler

