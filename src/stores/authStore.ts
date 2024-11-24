import { create } from "zustand";

type AuthState = {
  user: { id: string; email: string } | null;
  setUser: (user: { id: string; email: string } | null) => void;
  isAuthenticated: boolean;
  logout: () => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  setUser: (user) => set({ user, isAuthenticated: !!user }),
  isAuthenticated: false,
  logout: () => set({ user: null, isAuthenticated: false }),
}));
