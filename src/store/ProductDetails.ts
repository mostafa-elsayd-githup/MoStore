import { create } from "zustand";
interface ToggleSizeState {
  size: string | null;
  showError: boolean;
  toggleSize: (label: string) => void;
  setShowError: (show: boolean) => void;
}
export const useProductDetails = create<ToggleSizeState>((set, get) => ({
  size: null,
  showError: false,

  toggleSize: (label: string) => {
    const currentSize = get().size;
    if (currentSize === label) {
      set({ size: null });
      return;
    }
    set({ size: label, showError: false });
  },

  setShowError: (show: boolean) => set({ showError: show }),
  
}));
