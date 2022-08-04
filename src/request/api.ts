import request from './request'

interface loginData {
    password: string,
    username: string
}

type PromiseRes<T> = Promise<Result<T>>

interface Result<T = {}> {
    code: number,
    data: T
}

//登录返回结果
interface loginRes {
    token: string,
    tokenHead: string
}

//当前用户信息
interface userInfoRes {
    menus: []
}

interface userListParams {
    keywords: string,
    pageNum: number,
    pageSize: number
}

interface userListRes {
    list: []
}

//登录
export const loginApi = (data: loginData): PromiseRes<loginRes> => request.post('/admin/login', data)

//当前登录用户信息
export const  currentUserInfoApi = (): PromiseRes<userInfoRes> => request.get('/admin/info')

//用户列表
export const userList = (data: userListParams): PromiseRes<userListRes> => request.get('/admin/list', {params: data})