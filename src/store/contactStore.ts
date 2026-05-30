import { create } from "zustand";

interface ContactState {
  name: string;
  email: string;
  userMessage: string;

  setName: (name: string) => void;
  setEmail: (email: string) => void;
  setUserMessage: (message: string) => void;

  clearForm: () => void;
}

export const useContactStore = create<ContactState>((set) => ({
  name: "",
  email: "",
  userMessage: "",

  setName: (name) => set({ name }),
  setEmail: (email) => set({ email }),
  setUserMessage: (userMessage) => set({ userMessage }),

  clearForm: () =>
    set({
      name: "",
      email: "",
      userMessage: "",
    }),
}));
