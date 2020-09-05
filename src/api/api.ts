import axios, {AxiosError, AxiosRequestConfig, AxiosResponse} from "axios"

const instance = axios.create({
   baseURL: "http://studentcan.beget.tech/api",
   responseType: "json",
})
export default instance

instance.interceptors.request.use(
   (config: AxiosRequestConfig) => {
      // Do something with request data
      return config
   }, (error: AxiosError) => {
      // Do something with request data
      console.log(error)
      throw new Error(error.message)
   }
)

instance.interceptors.response.use(
   (response: AxiosResponse) => {
      // Do something with response data
      return response;
   }, (error) => {
      // Do something with response error
      throw new Error(error.message)
   }
);

export type BaseResponseT<D> = {
   success: boolean
   data: D
}
export type ErrorT = {
   msg?: string
}