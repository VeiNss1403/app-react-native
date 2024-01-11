import axios from "axios"

const REACT_APP_API_URL = 'http://192.168.1.8:8080/hoat-dong'

// const createAxiosInstance = (jwt) => {
//     const auth = 'Bearer ' + jwt
//     console.log(auth)
//     return axios.create({
//         baseURL: REACT_APP_API_URL,
//         timeout: 1000,
//         headers: { 'Authorization': auth}
//     });
// };
export const axiosJWT = axios.create()

export const getAllHoatDong = async (jwt) => {
    const param={
        'trangThai':'Đang triển khai'
    }
    const res = await axiosJWT.get(`${REACT_APP_API_URL}/trang-thai`, {
        headers: {
            Authorization: `Bearer ${jwt}`,
        },
        params:param
    },)
    return res.data
};