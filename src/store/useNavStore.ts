import { create } from "zustand";

interface NavState {
  activeLink: string;
  setActiveLink: (link: string) => void;
}

export const useNavStore = create<NavState>((set) => ({
  activeLink: "Home",
  setActiveLink: (link) => set({ activeLink: link }),
}));
