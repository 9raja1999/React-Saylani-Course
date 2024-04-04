import axiosHandler from "../axiosHandler";

export const login = async (payload) => {
    try {
        let data = JSON.stringify(payload)

        const response = await axiosHandler.post(
            '/auth/login',
            data
        )

        return response
    } catch (error) {
        throw new Error(error)
        // return Promise.reject(error)
    }
}