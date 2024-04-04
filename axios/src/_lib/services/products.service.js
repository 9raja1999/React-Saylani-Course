import axiosHandler from "../axiosHandler"

export const getAllProducts = async () => {
    try {
        const response = await axiosHandler.get('/products')
        return response
    } catch (error) {
        return error
    }
}