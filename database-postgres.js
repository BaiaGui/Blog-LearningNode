import { randomUUID } from "crypto";

export class BlogDatabase{
    #allBlogs = new Map();

    createBlog(newBlog){
        const blogId = randomUUID();
        this.#allBlogs.set(blogId, newBlog);
    }

    listBlogs(searchParam){
        return Array.from(this.#allBlogs.entries())
        .map((blogEntrie)=>{
            const blogId = blogEntrie[0];
            const blogBody = blogEntrie[1]

            return {
                blogId,
                ...blogBody,
            }
        })
        .filter(blog=>{
            if(searchParam){
                return blog.title.includes(searchParam)
            }
            else
                return true;
        })
    }

    updateBlog(blogId, newBlog){
        this.#allBlogs.set(blogId, newBlog);
    }

    deleteBlog(blogId){
        this.#allBlogs.delete(blogId);
    }
}