import request from './request'

interface loginData {
    password: string,
    username: string
}

interface loginRes {
    code: number,
    data: {
        token: string,
        tokenHead: string
    },
    message: string
}

//登录
export const loginApi = (data: loginData): Promise<loginRes> => request.post('/admin/login', data)