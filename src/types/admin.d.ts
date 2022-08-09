interface UserInfoObj {
    id?: number,
    username?: string,
    nickName?: string,
    email?: string,
    password?: string,
    note?: string,
    status?: number
}

interface UserRoleFormData {
    userRoles: RoleObj[],
    roleList: RoleObj[]
}