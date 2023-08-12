/**
 * 该文件用于声明接口返回值相关的类型
 */

declare namespace API {
  // 城市对象类型
  export interface ICity {
    cityId: number;
    isHot: number;
    name: string;
    pinyin: string;
  }

  // 城市列表接口返回值类型
  export interface ICityListResp {
    cities: ICity[];
  }
}
