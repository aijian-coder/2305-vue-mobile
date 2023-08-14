import { useCityStore } from "@/stores/city";

export function useStore() {
  return {
    cityStore: useCityStore(),
  };
}
