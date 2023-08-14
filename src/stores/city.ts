import { defineStore } from "pinia";
import store2 from "store2";
import { getCityList } from "@/api/city";

export const useCity = defineStore("city", {
  state: () => ({
    cities: [] as API.ICity[],
    // 当前选择的城市对象
    curCity: null as API.ICity | null,
  }),

  getters: {
    cityGroup(state) {
      // 定义一个结果集合
      const result: { groupName: string; groupList: API.ICity[] }[] = [];

      // 循环遍历 state.cities
      state.cities.forEach((city) => {
        // 获取拼音首字母
        const groupName = city.pinyin.charAt(0).toUpperCase();
        // 获取当前 groupName 在 result 中的下标
        const index = result.findIndex((item) => item.groupName === groupName);
        // 判断 index 是否 > -1
        if (index > -1) {
          // 找到了
          result[index].groupList.push(city);
        } else {
          // 没找到，主动添加
          result.push({
            groupName,
            groupList: [city],
          });
        }
      });

      // 返回 result
      return result.sort((a, b) => (a.groupName > b.groupName ? 1 : -1));
    },
    indexList(): string[] {
      return (this.cityGroup as any).map((item: any) => item.groupName);
    },
    curCityId(state) {
      return state.curCity?.cityId;
    },
  },

  actions: {
    /**
     * 获取城市列表动作
     */
    getCities() {
      // 从 本地存储中 获取出 cities
      const cities: API.ICity[] | null = store2.get("cities");
      if (cities) {
        // 存在，直接将 cities 赋值给 this.cities
        this.cities = cities;
        return;
      }

      getCityList().then((resp) => {
        this.cities = resp.cities;
        // 将 resp.cities 做一个本地存储
        store2.set("cities", resp.cities);
      });
    },

    /**
     * 修改当前城市
     */
    changeCity(payload: API.ICity) {
      this.curCity = payload;
    },
  },
});
