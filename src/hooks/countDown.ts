import { ref, computed } from "vue";

interface IOptions {
  // 倒计时时长，单位秒
  time: number;
  // 倒计时改变时触发的回调函数
  onChange?: (current: number) => void;
  // 倒计时结束时触发的回调函数
  onFinish?: () => void;
}

export function useCountDown(options: IOptions) {
  // 定义一个响应式的 current 数据
  const current = ref(options.time);

  // 根据 current 计算出当前是否正在计时中
  const starting = computed(
    () => current.value !== 0 && current.value !== options.time
  );

  // 定义一个 setInterval 的值
  let timer: any;

  // 定义一个 start 的方法，开始计时
  function start() {
    clearInterval(timer);

    timer = setInterval(() => {
      current.value--;
      // 调用 options.onChange
      // options.onChange?.(current.value);
      options.onChange && options.onChange(current.value);

      if (current.value === 0) {
        // 停止
        clearInterval(timer);
        // 重置 current 值
        current.value = options.time;
        // 调用 options.onFinish
        options.onFinish?.();
      }
    }, 1000);
  }

  // 定义一个 pause 方法，暂停计时
  function pause() {
    clearInterval(timer);
  }

  // 定义一个 reset 方法，重置计时
  function reset() {
    // 将 current 重置
    current.value = options.time;
    // 启动 start
    start();
  }

  return {
    current,
    starting,
    start,
    pause,
    reset,
  };
}
