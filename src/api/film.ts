import { httpGet } from "@/utils/request";

/**
 * 获取电影列表数据
 */
export function getFilmList(params: any) {
  return httpGet<API.IFilmListResp>("mall.film-ticket.film.list", params);
}
