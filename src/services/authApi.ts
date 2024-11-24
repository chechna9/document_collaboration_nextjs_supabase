import { useMutation, useQueryClient } from "react-query";
import { useAuthStore } from "@/stores/authStore";

// Sign Up Hook
export const useSignUp = (email:string,password:string) => {
  // // return useMutation(
  // //   async () => {
  // //     const { data, error } = await (
  // //       await supabase
  // //     ).auth.signUp({ email, password });
  // //     if (error) throw new Error(error.message);
  // //     return data;
  // //   }
  // );
};

// Login Hook
export const useLogin = () => {
  // const queryClient = useQueryClient();
  // const setUser = useAuthStore((state) => state.setUser);

  // return useMutation(
  //   async ({ email, password }: { email: string; password: string }) => {
  //     const { data, error } = await (
  //       await supabase
  //     ).auth.signInWithPassword({ email, password });
  //     if (error) throw new Error(error.message);

  //     // Store the user in Zustand
  //     const user = data.user;
  //     setUser(user == null ? null : { id: user.id, email: user.email ?? '' });

  //     return data;
  //   }
  // );
};

// Logout Hook
export const useLogout = () => {
  // const queryClient = useQueryClient();
  // const logout = useAuthStore((state) => state.logout);

  // return useMutation(async () => {
  //   const { error } = await (await supabase).auth.signOut();
  //   if (error) throw new Error(error.message);

  //   // Clear Zustand and invalidate cache
  //   logout();
  //   queryClient.clear();
  // });
};
