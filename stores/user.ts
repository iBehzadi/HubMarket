import { defineStore } from "pinia";

export const useUserStore = defineStore({
  id: "myUserStore",
  state: () => ({
    isMenuOverlay: false,
    isLoading: false,
    cart: [],
    checkout: [],
  }),
  persist: true,
  actions: {},
});

// declare global {
//   interface product {
//     id: number;
//     title: string;
//     description: string;
//     url: string;
//   }
// }
