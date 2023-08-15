import { defineStore } from "pinia";
import { getSmsCode, login } from "@/api/user";

export const useUserStore = defineStore("user", {
  state: () => ({
    token: "", // 用户token
    info: null as Omit<API.ILoginResp, "token"> | null, // 用户信息
  }),

  actions: {
    /**
     * 获取手机号验证码 动作
     */
    getSmsCode(mobile: string) {
      getSmsCode(mobile).then((resp) => {
        console.log(resp);
      });
    },

    /**
     * 登录 动作
     */
    login(mobile: string, smsCode: string) {
      return login(mobile, smsCode).then((resp) => {
        console.log("resp", resp);
        const { token, ...info } = resp;
        this.token = token;
        this.info = info;
      });
    },
  },

  persist: true,
});
