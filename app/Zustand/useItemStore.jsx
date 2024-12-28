import Cookies from "js-cookie";
import { create } from "zustand";

const COOKIE_KEY = "selectedOptions";

const useItemStore = create((set) => ({
  selectedOptions: (() => {
    try {
      const cookieData = Cookies.get(COOKIE_KEY);
      return cookieData ? JSON.parse(cookieData) : [];
    } catch {
      return [];
    }
  })(),

  addSelectedOptions: (item) =>
    set((state) => {
      const updatedOptions = [...state.selectedOptions, item];
      Cookies.set(COOKIE_KEY, JSON.stringify(updatedOptions), { expires: 7 });
      return { selectedOptions: updatedOptions };
    }),

  clearSelectedOptions: () => {
    Cookies.remove(COOKIE_KEY);
    set({ selectedOptions: [] });
  },

  updateQuantity: (itemId, quantity) =>
    set((state) => {
      const updatedOptions = state.selectedOptions
        .map((item) =>
          item.itemId === itemId ? { ...item, quantity: Math.max(0, quantity) } : item
        )
        .filter((item) => item.quantity > 0);
      Cookies.set(COOKIE_KEY, JSON.stringify(updatedOptions), { expires: 7 });
      return { selectedOptions: updatedOptions };
    }),
}));

export default useItemStore;
