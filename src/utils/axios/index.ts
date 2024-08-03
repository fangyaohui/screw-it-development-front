import axios from 'axios'
import qs from 'qs'

// declare type AxiosHeaders =
//     | 'application/json'
//     | 'application/x-www-form-urlencoded'
//     | 'multipart/form-data'

declare type AxiosMethod = 'get' | 'post' | 'delete' | 'put' | 'patch'

declare type AxiosResponseType = 'arraybuffer' | 'blob' | 'document' | 'json' | 'text' | 'stream'

declare interface AxiosConfig {
    params?: any
    data?: any
    url?: string
    timeout?: number
    method?: AxiosMethod
    headersType?: string
    responseType?: AxiosResponseType
}
type IResPromise<T = any> = Promise<IResponse<T>>

// 创建axios实例
const service = axios.create({
    baseURL: "/screw/api", // api 的 base_url
    timeout: 3*1000, // 请求超时时间
    maxBodyLength: 10000,
    maxContentLength: 10000,
    paramsSerializer: {
        serialize: function (params) {
            return qs.stringify(params, { arrayFormat: 'repeat' })
        }
    }
})

service.interceptors.request.use(
    config => {
        const token = localStorage.getItem('token');
        if(token){
            config.headers['Authorization'] = `Bearer ${token}`;

        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
)

interface HeadersType {
    headers?: {
        isToken?: boolean
        isInline?: boolean
        skipToken?: boolean
        'TENANT-ID'?: string
        Authorization: string
    }
}

const request = <T>(option: AxiosConfig & HeadersType): IResPromise<T> => {
    const { url, method, params, data, headersType, responseType, headers, timeout } = option
    return service({
        url: url,
        method,
        params,
        data,
        timeout,
        responseType: responseType,
        headers: Object.assign(
            {
                'Content-Type': headersType
            },
            headers
        )
    }) as unknown as IResPromise<T>
}
export default {
    get: <T>(option: AxiosConfig & HeadersType) => {
        return request<T>({ method: 'get', ...option })
    },
    post: <T>(option: AxiosConfig & HeadersType) => {
        return request<T>({ method: 'post', ...option })
    },
    patch: <T>(option: AxiosConfig & HeadersType) => {
        return request<T>({ method: 'patch', ...option })
    },
    delete: <T>(option: AxiosConfig & HeadersType) => {
        return request<T>({ method: 'delete', ...option })
    },
    put: <T>(option: AxiosConfig & HeadersType) => {
        return request<T>({ method: 'put', ...option })
    }
}
