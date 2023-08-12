import { defineStore } from "pinia";

// 调用 defineStore 返回一个 组合式函数
export const useApp = defineStore("app", {
  // options 方式
  state: () => ({
    msg: "hello",
    token: "1234",
  }),

  getters: {
    reverseMsg(state) {
      // state 就是当前 state 的数据
      return state.msg.split("").reverse().join("");
    },
  },

  actions: {
    changeMsg(payload: number) {
      // 第一个参数不再是 context ，而是 payload
      // 通过 this 获取到当前 store 实例
      //    state 数据，getters 数据，actions 数据，都会代理到 this 上
      //    也就是说，this.msg  this.reverseMsg  this.changeMsg
      console.log("payload", payload);
      this.msg = "world";
    },

    changeToken() {
      this.token += "~";
    },
  },

  // 直接对当前 store 的 state 所有数据都持久化存储到默认的 localStorage 中
  // persist: true,

  persist: {
    // 规定只对某些数据做存储
    paths: ["token"],
    // storage: localStorage, // 将数据持久化到 localStorage
    storage: sessionStorage, // 将数据持久化到 sessionStorage
  },
});
