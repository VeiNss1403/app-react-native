import axios from "axios"

const REACT_APP_API_URL = 'http://192.168.1.8:8080/tai-khoan'

export const axiosJWT = axios.create()

export const loginUser = async (data) => {
    const res = await axios.post(`${REACT_APP_API_URL}/sign-in`, data)
    return res.data
}
