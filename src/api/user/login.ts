import request from '@/utils/axios'

const REQUEST_ORIGIN = '/upm'

export const loginUserApi = (data): Promise<IResponse> => {
    return request.post({
        url: REQUEST_ORIGIN + '/login/signIn',
        data
    })
}
