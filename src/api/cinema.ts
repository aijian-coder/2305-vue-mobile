import { httpGet } from "@/utils/request";

/**
 * 获取影院详情
 */
export function getCinemaInfo(cinemaId: string) {
  return httpGet<{ cinema: API.ICinema }>("mall.film-ticket.cinema.info", {
    cinemaId,
  });
}

/**
 * 获取影院下的电影列表
 */
export function getCinemaFilms(cinemaId: string) {
  return httpGet<{ films: API.IFilm[] }>(
    "mall.film-ticket.film.cinema-show-film",
    {
      cinemaId,
    }
  );
}
