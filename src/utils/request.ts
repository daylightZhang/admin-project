import axios from 'axios'
import { ElMessage } from 'element-plus'

let request = axios.create({
    baseURL: '/api',
    timeout: 1000
});

request.interceptors.request.use((config) => {
    return config
})

request.interceptors.response.use((response) => {
    return response.data
}, (error) => {
    let message = ''
    let status = error.response.status
    switch(status) {
        case 401:
            message = 'token expired'
            break;
        case 403:
            message = 'forbidden'
            break;
        case 404:
            message = 'not found'
            break;
        case 500:
            message = 'server error'
            break;
        default:
            message = 'unknown error'
            break;
    }
    ElMessage({
        type: 'error',
        message
    })
    return Promise.reject(error)
})

export default request