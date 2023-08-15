import { httpPost } from "@/utils/request";

/**
 * 获取手机号验证码
 */
export function getSmsCode(mobile: string) {
  return httpPost("mall.user.sms-code.send", {
    imgCode: "",
    imgKey: "",
    type: "1",
    mobile,
  });
}

/**
 * 手机号验证码登录
 */
export function login(mobile: string, smsCode: string) {
  return httpPost<API.ILoginResp>("mall.user.sms-code-login", {
    mobile,
    smsCode,
    imgKey: "",
    imgCode: "",
    extra: {},
  });
}
