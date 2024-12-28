import Cookies from "js-cookie";
import { create } from "zustand";

const COOKIE_KEY = "selectedOptions";

const useItemStore = create((set) => ({
  selectedOptions: (() => {
    try {
      const cookieData = Cookies.get(COOKIE_KEY);
      return cookieData ? JSON.parse(cookieData) : [];
    } catch (err) {
      // console.error("Error cookie:", err);
      return [];
    }
  })(),

  addSelectedOptions: (item) =>
    set((state) => {
      const updatedOptions = [...state.selectedOptions, item];
      Cookies.set(COOKIE_KEY, JSON.stringify(updatedOptions));
      return { selectedOptions: updatedOptions };
    }),

  clearSelectedOptions: () => {
    Cookies.remove(COOKIE_KEY);
    set(() => ({ selectedOptions: [] }));
  },
}));

export default useItemStore;
