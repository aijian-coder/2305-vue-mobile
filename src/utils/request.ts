/**
 * Axios 封装
 */

import axios from "axios";
import type { AxiosRequestConfig } from "axios";

// 创建一个 axios 实例
const request = axios.create({
  baseURL: "/api",
  timeout: 3000,
});

// 请求拦截
request.interceptors.request.use((config) => {
  return config;
});

// 响应拦截
request.interceptors.response.use(
  (response) => {
    // 获取接口真实的返回数据
    const resp = response.data;

    // 做业务状态码的判断
    if (resp.status !== 0) {
      // 弹窗提示
      alert(resp.msg);
      return Promise.reject(resp);
    } else {
      return resp.data;
    }
  },
  (error) => {
    return Promise.reject(error);
  }
);

/**
 * 导出一个 httpGet
 * @param apiCode X-HOST 需要的值
 * @param params  请求参数
 * @returns
 */
export function httpGet<T = any>(apiCode: string, params?: any) {
  const headers = {
    "X-Host": apiCode,
  };

  return request<T, T>({
    url: `/gateway?${apiCode}`,
    method: "GET",
    params,
    headers,
  });
}

/**
 * 导出一个 httpGet
 * @param apiCode X-HOST 需要的值
 * @param data    请求参数, 请求体
 * @param config  请求配置
 * @returns
 */
export function httpPost<T = any>(
  apiCode: string,
  data?: any,
  config?: AxiosRequestConfig
) {
  // 将 config.headers 这个对象中 增加 X-HOST
  const headers = {
    ...config?.headers,
    "X-Host": apiCode,
  };

  return request<T, T>({
    ...config,
    url: `/gateway?${apiCode}`,
    method: "POST",
    data,
    headers,
  });
}

export default request;
