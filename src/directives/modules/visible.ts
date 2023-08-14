/**
 * v-visible
 */

import { type Directive } from "vue";

const visible: Directive = (el, binding) => {
  // 如果 binding.value 是 false, 则对当前元素设置 style 让其 visibl: hidden
  if (!binding.value) {
    el.style.visibility = "hidden";
  }
};

export default visible;
