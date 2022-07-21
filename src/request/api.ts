import request from './request'

//登录
export const loginApi = (data: unknown) => request.post('/admin/login', data)