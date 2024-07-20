import { sql } from "@vercel/postgres";
import { Categories, Posts } from "./definitions";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function fetchBlogs(category_id: number) {
  try {
    // Artificially delay a response for demo purposes.
    // Don't do this in production :)
    console.log("Fetching...");
    const data =
      category_id > 0
        ? await sql<Posts>`
      SELECT 
        posts.*, 
        users_a.username AS user_name, 
        categories.name AS category_name
      FROM 
        posts
      JOIN 
        users_a ON posts.user_id = users_a.user_id
      JOIN 
        categories ON posts.category_id = categories.category_id
      WHERE posts.category_id = ${category_id}
      ORDER BY posts.post_id
    `
        : await sql<Posts>`
      SELECT 
        posts.*, 
        users_a.username AS user_name, 
        categories.name AS category_name
      FROM 
        posts
      JOIN 
        users_a ON posts.user_id = users_a.user_id
      JOIN 
        categories ON posts.category_id = categories.category_id
      ORDER BY posts.post_id
    `;
    // console.log(data.rows);
    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
  }
}

export async function fetchCategories() {
  try {
    const data = await sql<Categories>`
    SELECT * FROM categories;`;
    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
  }
}
