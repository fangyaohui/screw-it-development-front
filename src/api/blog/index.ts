import request from '@/utils/axios'

const REQUEST_ORIGIN = '/blog'

export const getHeadlineBriefInfoApi = (): Promise<IResponse> => {
    return request.get({
        url: REQUEST_ORIGIN + '/getHeadlineBriefInfo',
    })
}

export const getImageApi = (params): Promise<IResponse> => {
    return request.get({
        url: REQUEST_ORIGIN + `/upload/getImage`,
        params
    })
}
