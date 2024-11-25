"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { signUpWithProfile } from "@/actions/profileActions";

export async function login({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const supabase = await createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: email,
    password: password,
  };

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    redirect("/login?message=Error siging in");
  }

  revalidatePath("/", "layout");
  redirect("/documents");
}

export async function signup({
  email,
  password,
  username,
  profilePictUrl,
}: {
  email: string;
  password: string;
  username: string;
  profilePictUrl: string | null;	
}) {
  const supabase = await createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs

  try {
    await signUpWithProfile({
      email: email,
      password: password,
      username: username,
      fileUrl: profilePictUrl,
    });
  } catch (error) {
    console.error("Signup failed:", error);
    redirect("/signup?message=Error siging up");
  }

  revalidatePath("/", "layout");
  redirect("/login");
}

export async function logout() {
  const supabase = await createClient();

  const { error } = await supabase.auth.signOut();

  if (error) {
    redirect("/?message=Error logging out");
  }

  revalidatePath("/", "layout");
  redirect("/login");
}
