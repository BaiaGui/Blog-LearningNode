// import { createServer } from 'node:http';

// const server = createServer((request, response)=> {
//     console.log('oi');
//     return response.end();
// });

// server.listen(3000);
import express, { response } from 'express';
import { BlogDatabase } from './database.js';
const app = express();
app.use(express.json());

const port = 3000;

const database = new BlogDatabase();

app.get('/', (req, res)=>{
    res.send('Hello World');
})

app.get('/blog', (req, res)=>{
    const searchParam = req.query.search
    const blogs = database.listBlogs(searchParam);
    return res.send(blogs);
})

app.post('/blog', (req, res)=>{
    const {title, description, blogBody} = req.body
    database.createBlog({
        title,
        description,
        blogBody,
    })
    return res.status(201).end();
})




app.patch('/blog/:id', (req, res)=>{

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