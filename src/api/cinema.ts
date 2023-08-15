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

/**
 * 获取排期列表
 */
export function getScheduleList(
  cinemaId: string,
  filmId: string,
  date: string
) {
  return httpGet<{ schedules: API.ISchedule[] }>(
    "mall.film-ticket.schedule.list",
    {
      cinemaId,
      filmId,
      date,
      k: new Date().getTime(),
    }
  );
}
