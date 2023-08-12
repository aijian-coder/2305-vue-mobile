import { useApp, useCounter } from "@/stores";

const modules = import.meta.glob(["../stores/*.ts", "!../stores/index.ts"], {
  eager: true,
});

export function useStore() {
  const obj: any = {};
  for (let key in modules) {
    Object.assign(obj, modules[key]);
  }

  // console.log("===obj", obj);
  const result: any = {};

  for (let key in obj) {
    const name = key.replace("use", "").toLocaleLowerCase();
    console.log("name", name);
    result[name] = obj[key]();
  }
  console.log(result, "result");

  return result;
}
