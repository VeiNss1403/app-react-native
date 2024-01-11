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

export const getHoatDongDangKy = async (jwt) => {
 
    const res = await axiosJWT.get(`${REACT_APP_API_URL}/sinh-vien-dang-ky`, {
        headers: {
            Authorization: `Bearer ${jwt}`,
        },
    },)
    return res.data
};

export const postDangKyHoatDong = async (maHoatDong,jwt) => {
    console.log('dkđ',maHoatDong,jwt)
    const body={}
    const res = await axiosJWT.post(`${REACT_APP_API_URL}/dang-ky/${maHoatDong}`, body,{
        headers: {
            Authorization: `Bearer ${jwt}`,
        },
    },)
    return res.data
};
export const deleteHuyDangKyHoatDong = async (maHoatDong,jwt) => {
    console.log('dkđ',maHoatDong,jwt)
    const res = await axiosJWT.delete(`${REACT_APP_API_URL}/huy-dang-ky/${maHoatDong}`,{
        headers: {
            Authorization: `Bearer ${jwt}`,
        },
    },)
    return res.data
};