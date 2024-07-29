import request from '@/utils/axios'

const REQUEST_ORIGIN = '/user'

export const registerUserApi = (data): Promise<IResponse> => {
    return request.get({
        url: REQUEST_ORIGIN + '/test',
        methods: "GET",
        data
    })
}

export const loginUserApi = (data): Promise<IResponse> => {
    return request.post({
        url: '/login/signIn',
        data
    })
}

// export const addSingleUserApi = (data): Promise<IResponse> => {
//     return request.post({
//         url: REQUEST_ORIGIN + '/user/addSingleUser',
//         data
//     })
// }
//
// export const getUserDetailApi = (params): Promise<IResponse> => {
//     return request.get({
//         url: REQUEST_ORIGIN + '/user/getRandomGuyInfo',
//         params
//     })
// }
//
// export const deleteSingleUserApi = (params): Promise<IResponse> => {
//     return request.delete({
//         url: REQUEST_ORIGIN + `/user/${params.userId}`
//     })
// }
