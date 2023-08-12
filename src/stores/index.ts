// 直接从 ./app 中 导入 useApp 且导出
export { useApp } from "./app";
// 直接从 ./counter 中 导入 useCounter 且导出
export { useCounter } from "./counter";

// const modules = import.meta.glob(["./*.ts", "!./index.ts"], {
//   eager: true,
// });
// console.log("=== modules", modules);

// const obj = {}
// for (let key in modules) {
//   Object.assign(obj, modules)
// }
// console.log()
