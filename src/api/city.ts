import { httpGet } from "@/utils/request";

/**
 * 获取城市列表数据
 */
export function getCityList() {
  return httpGet<API.ICityListResp>("mall.film-ticket.city.list");
}
