import { sql } from "@vercel/postgres";
import { Categories, Posts } from "./definitions";

export async function fetchBlogs() {
  try {
    const data = await sql<Posts>`
    SELECT 
      posts.*, 
      users_a.username AS user_name, 
      categories.name AS category_name
        FROM 
          posts
        JOIN 
          users_a ON posts.user_id = users_a.user_id
        JOIN 
      categories ON posts.category_id = categories.category_id;`;
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
