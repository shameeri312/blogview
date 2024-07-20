// app/api/filter-posts/route.ts
"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { fetchBlogs } from "@/app/lib/data"; // Adjust the import path
import { sql } from "@vercel/postgres";

export async function filterPosts(categoryId: number) {
  // Fetch the filtered posts or perform some data action
  const posts = await fetchBlogs(categoryId);

  // Trigger revalidation for a specific path
  revalidatePath("/posts"); // This revalidates the page to ensure fresh data

  // Redirect to the filtered posts page with query parameters
  redirect(`/posts?category=${categoryId}`);
}
