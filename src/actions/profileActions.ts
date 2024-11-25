"use server";

import { createClient } from "@/lib/supabase/server";
import { uploadFile } from "@/lib/supabase/supabaseStorage";

const TABLE_NAME = "profile";


export async function signUpWithProfile({email, password, username, fileUrl}:{email: string, password: string, username: string, fileUrl: string | null}) {	
    const supabase = await createClient();
  // Step 1: Sign up the user
  const { data: authData, error: authError } = await supabase.auth.signUp({ email, password });
  if (authError) throw new Error(authError.message);

  const userId = authData.user?.id;
  if (!userId) throw new Error("User ID not found after signup.");


  // Step 3: Insert profile into the database
  const { error: profileError } = await supabase.from(TABLE_NAME).insert({
    id: userId,
    email,
    username,
    profile_picture: fileUrl,
  });

  if (profileError) throw new Error(profileError.message);

  return;
}
