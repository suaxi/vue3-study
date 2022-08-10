interface loginData {
    password: string,
    username: string
}

type PromiseRes<T = {}> = Promise<Result<T>>

interface Result<T = {}> {
    code?: number,
    errno?: number,
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