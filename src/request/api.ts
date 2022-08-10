import request from './request'
// @ts-ignore
import qs from 'qs';

//登录
export const loginApi = (data: loginData): PromiseRes<loginRes> => request.post('/admin/login', data)

//当前登录用户信息
export const currentUserInfoApi = (): PromiseRes<userInfoRes> => request.get('/admin/info')

//用户列表
export const userList = (data: userListParams): PromiseRes<userListRes> => request.get('/admin/list', {params: data})

//修改用户信息
export const updateUserInfo = (id: number, data: UserInfoObj): PromiseRes => request.post('/admin/update/' + id, data)

//角色列表
export const roleList = (): PromiseRes<RoleObj[]> => request.get('/role/listAll')

//根据用户id获取角色信息
export const getRoleByUserId = (id: number): PromiseRes<RoleObj[]> => request.get('/admin/role/' + id)

//修改用户角色
//roleIds 字符串形式
// export const updateUserRole = (data: {adminId: number, roleIds: string}): PromiseRes => request.post('/admin/role/update', null, {params: data})
//roleIds formData形式
export const updateUserRole = (data: { adminId: number, roleIds: string }): PromiseRes => request.post('/admin/role/update', qs.stringify(data))

//获取首页数据
export const adminStat = (): PromiseRes<IndexData> => request.get('http://kumanxuan1.f3322.net:8360/admin/stat')