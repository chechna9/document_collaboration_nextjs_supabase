import { createClient } from "@/lib/supabase/server";

export async function saveDocument({
  id,
  title,
  content,
  ownerId,
}: {
  id?: string;
  title: string;
  content: any;
  ownerId: string;
}) {
  const supabase = await createClient();

  if (id) {
    // Update existing document
    const { error } = await supabase
      .from("documents")
      .update({ title, content, updated_at: new Date() })
      .eq("id", id)
      .eq("owner_id", ownerId); // Ensure only the owner can update

    if (error) throw new Error(`Error updating document: ${error.message}`);
  } else {
    // Insert new document
    const { error } = await supabase
      .from("documents")
      .insert({ title, content, owner_id: ownerId });

    if (error) throw new Error(`Error saving document: ${error.message}`);
  }
}

export async function addCollaborator({
    documentId,
    userId,
  }: {
    documentId: string;
    userId: string;
  }) {
    const supabase = await createClient();
  
    const { error } = await supabase
      .from("document_permissions")
      .insert({ document_id: documentId, user_id: userId, permission: "edit" });
  
    if (error) throw new Error(`Error adding collaborator: ${error.message}`);
  }


  export async function getUserDocuments(userId: string) {
    const supabase = await createClient();
  
    const { data, error } = await supabase
      .from("documents")
      .select("*")
      .or(`owner_id.eq.${userId},id.in.(SELECT document_id FROM document_permissions WHERE user_id.eq.${userId})`);
  
    if (error) throw new Error(`Error fetching documents: ${error.message}`);
    return data;
  }