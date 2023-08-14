import { useCity } from "@/stores/city";

export function useStore() {
  return {
    city: useCity(),
  };
}
