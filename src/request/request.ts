import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://120.24.64.5:8088/mall-admin',
    timeout: 15000
})

//拦截器
instance.interceptors.request.use(config => {
    return config
}, error => {
    return Promise.reject(error)
})

instance.interceptors.response.use(result => {
    return result.data
}, error => {
    return Promise.reject(error)
})

export default instance