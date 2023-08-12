import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useCounter = defineStore(
  "counter",
  () => {
    // 函数方式，composition api 方式

    // 定义 state 数据，通过 ref 方法
    const count = ref(1);

    // 定义 getter 数据，通过 computed 方法
    const countPlus = computed(() => {
      return count.value + 1;
    });

    // 定义 action 数据，通过 普通函数 即可
    function increment() {
      count.value++;
    }
    function decrement() {
      count.value--;
    }

    // 最后，需要 return 出去
    return {
      count,
      countPlus,
      increment,
      decrement,
    };
  },
  {
    // 配置项
    persist: true,
  }
);
