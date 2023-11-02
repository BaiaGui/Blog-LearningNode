import { randomUUID } from "crypto";
import {sql} from "./db.js"

export class BlogDatabasePostgres{

    async createBlog(newBlog){
        const blogId = randomUUID();
        await sql`INSERT INTO blogs (id, title, description, blogBody) 
        VALUES (${blogId},${newBlog.title},${newBlog.description},${newBlog.blogBody})`;
    }

    async listBlogs(searchParam){
        let blogs;

        if(searchParam){
    
            blogs = await sql`SELECT id, title, description, blogBody FROM blogs WHERE title ILIKE ${'%'+ searchParam + '%'}`
        }
        else{
            blogs = await sql`SELECT * FROM blogs`
        }
        console.log(blogs)
        return blogs;
    }

    async updateBlog(blogId, newBlog){
        await sql`UPDATE blogs
        SET title = ${newBlog.title}, description = ${newBlog.description}, blogBody= ${newBlog.blogBody}
        WHERE id= ${blogId}`
    }

    async deleteBlog(blogId){
        await sql`DELETE FROM blogs WHERE id = ${blogId}`
    }
}