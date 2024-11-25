"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { signup } from "../../actions";
import { uploadFile } from "@/lib/supabase/supabaseStorage";
export const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Invalid email address.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
  profilePicture: z
    .any()
    .refine((file) => !file || file instanceof FileList, {
      message: "Invalid file upload.",
    })
    .optional(),
});

export function SignupForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      profilePicture: undefined,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const file = values.profilePicture?.[0] ?? null;
    try {
      let profilePictureUrl = null;

      // Handle file upload
      if (values.profilePicture?.[0]) {
        profilePictureUrl = await uploadFile(values.profilePicture[0]);
      }
      await signup({
        email: values.email,
        password: values.password,
        username: values.username,
        profilePictUrl: profilePictureUrl,
      });
      console.log("Signup successful:", values);
    } catch (error) {
      console.error("Signup failed:", error);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="formSize">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="chechna9" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="chechna9@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormItem>
          <FormLabel>Profile Picture</FormLabel>
          <FormControl>
            <Input
              type="file"
              accept="image/*"
              {...form.register("profilePicture")}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
        <Button disabled={form.formState.isSubmitting} type="submit">
          {form.formState.isSubmitting && <Loader2 className="animate-spin" />}
          Signup
        </Button>
      </form>
    </Form>
  );
}
