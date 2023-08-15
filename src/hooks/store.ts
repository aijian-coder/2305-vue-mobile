import { useCityStore } from "@/stores/city";
import { useUserStore } from "@/stores/user";

export function useStore() {
  return {
    cityStore: useCityStore(),
    userStore: useUserStore(),
  };
}
