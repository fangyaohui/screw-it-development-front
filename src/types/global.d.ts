declare interface IResponse<T = any> {
    code: string | number
    msg: string
    data: T extends any ? T : T & any
}