import { createClient } from "./client";

const BUCKET_NAME = "avatars";
export async function uploadFile(file: File | null) {
  if (!file) {
    return null;
  }
  const supabase =  createClient();

  const filePath = `profile/${Date.now()}_${file.name}`;
  const { data, error } = await supabase.storage
    .from(BUCKET_NAME)
    .upload(filePath, file, {
      cacheControl: "3600",
      upsert: true,
    });

  if (error) {
    throw new Error(`Error uploading file: ${error.message}`);
  }

  // Construct the public URL
  const { data: publicUrlData } = supabase.storage
    .from(BUCKET_NAME)
    .getPublicUrl(filePath);

  if (!publicUrlData?.publicUrl) {
    throw new Error("Failed to retrieve public URL for the uploaded file.");
  }

  return publicUrlData.publicUrl;
}
