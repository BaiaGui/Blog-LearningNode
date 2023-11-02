import express, { response } from 'express';
import { BlogDatabasePostgres } from './database-postgres.js';
const app = express();
app.use(express.json());

const port = 3000;

const database = new BlogDatabasePostgres();

app.get('/', (req, res)=>{
    res.send('Hello World');
})

app.get('/blog', async (req, res)=>{
    const searchParam = req.query.search
    const blogs = await database.listBlogs(searchParam);
    return res.send(blogs);
})

app.post('/blog', async (req, res)=>{
    const {title, description, blogBody} = req.body
    await database.createBlog({
        title,
        description,
        blogBody,
    })
    return res.status(201).end();
})

app.put('/blog/:id', (req, res)=>{

    const blogId = req.params.id;

    const {title, description, blogBody} = req.body;

    database.updateBlog(blogId, {
        title,
        description,
        blogBody,
    })
    return res.status(204).send();
})


app.delete('/blog/:id', (req, res)=>{
    const blogId = req.params.id;
    database.deleteBlog(blogId);
    return res.status(204).send();

})


app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
})