import { create } from "zustand";

const useItemStore = create((set) => ({
  selectedOptions: [],
  addSelectedOptions: (item) =>
    set((state) => ({
      selectedOptions: [...state.selectedOptions, item],
    })),
  clearSelectedOptions: () => set(() => ({ selectedOptions: [] })),
}));

export default useItemStore;
