<script lang="ts" setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "@/hooks/store";
import { useCountDown } from "@/hooks/countDown";

const { userStore } = useStore();
const router = useRouter();
const { current, starting, start } = useCountDown({ time: 10 });

// 手机号
const mobile = ref("");
// 验证码
const code = ref("");

// 手机号正则
const phoneReg = /^1\d{10}$/;

// 发送验证码按钮是否禁用
const sendDisabled = computed(() => {
  return !phoneReg.test(mobile.value) || starting.value;
});
/**
 * 发送验证码
 */
function sendCode() {
  console.log("sendCode");

  userStore.getSmsCode(mobile.value);

  // 开始
  start();
}

function onSubmit() {
  console.log("onSubmit");

  // 调用 登录动作
  userStore.login(mobile.value, code.value).then(() => {
    // 跳转页面
    router.replace({ name: "home" });
  });
}
</script>

<template>
  <div class="page">
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field
          v-model="mobile"
          type="tel"
          placeholder="手机号"
          maxlength="11"
          :rules="[{ required: true, message: '请填写手机号' }]"
        >
          <template #button>
            <van-button
              size="small"
              type="primary"
              :disabled="sendDisabled"
              @click="sendCode"
            >
              {{ starting ? current + "秒" : "发送验证码" }}
            </van-button>
          </template>
        </van-field>
        <van-field
          v-model="code"
          placeholder="验证码"
          :rules="[{ required: true, message: '请填写验证码' }]"
        />
      </van-cell-group>

      <div style="margin: 16px">
        <van-button round block type="primary" native-type="submit">
          登录
        </van-button>
      </div>
    </van-form>
  </div>
</template>
