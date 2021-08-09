import axios from 'axios'
import { message } from 'antd'
import config from '../../configs'
import { getStorage } from '@utils/index'

const { host, env } = config
const loadingList: number[] = []

// 实例化 ajax请求对象
const ajaxinstance = axios.create({
  baseURL: host,
  timeout: 20000,
  data: {},
  headers: { systemCode: 'S005,' },
})

// 请求拦截器
ajaxinstance.interceptors.request.use(
  (request) => {
    const token = getStorage('token')
    const { params = {} } = request
    if (!params.noloading && loadingList.length < 1) {
      // message.loading('加载中...', 20)
      loadingList.push(1)
    }
    token && (request.headers['Token'] = token)
    return request
  },
  (error) => {
    message.destroy()
    message.error(error)
  },
)

// 响应拦截器
ajaxinstance.interceptors.response.use(
  function (res): any {
    const { data } = res
    const { code } = data
    if (loadingList.length > 0) {
      message.destroy()
      loadingList.shift()
    }
    return { data: data.data, code, message: data?.message }
  },
  async (error) => {
    message.destroy()
    console.log(error)
  },
)

export default ajaxinstance
