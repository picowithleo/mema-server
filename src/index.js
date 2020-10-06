require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
// const { NativeError } = require("mongoose");
const app = express();
const routes = require("./routes");

const PORT = process.env.PORT || 3000;

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan("common"));

app.use("/v1", routes);
 
// http://    www.example.com  /people  /1              ?name=pico
// protocol   domain            path    route params    query params


// app.use((req, res, next) => {
//     console.log(new Date());
//     req.time = new Date();
//     next();
// });

// function checkToken(req, res, next) {
//     next();
//  };

//method path
// app.get("/people/:id", function (req, res) {
//   res.send("Hello World!!");
// });

// app.get("/greeting", checkToken, (req,res) => {
//     res.send("hello");
// });

// app.get("/greeting/:name", (req,res) => {
//     const { name } = req.params;
//     const { title } = req.query;
//     res.send(`hello ${title}. ${name}`);
// });

// app.get("/time", (req, res) => {
//     res.send(req.time);
// })
 
// const posts = [];
// let currentId = 1;

// app.get('/v1/posts', (req, res) => {
//     res.json(posts);
// });

// app.post('/v1/posts', (req, res) => {
//     const { author, content } = req.body;
//     const newPost = { author: author, content: content, id: currentId++ }
//     posts.push(newPost);
//     res.status(201).json(newPost);
// });

// app.get('/v1/posts/:id', (req, res) => {
//     const { id } = req.params;
//     const post = posts.find(i => i.id === Number(id));
//     if (!post) {
//         return res.sendStatus(404);
//     }
//     res.json(post);
// });

// app.put('/v1/posts/:id', (req, res) => {
//     const { id } = req.params;
//     const { author, content } = req.body;
//     const post = posts.find(i => i.id === Number(id));
//     if (!post) {
//         return res.sendStatus(404);
//     }
//     post.author = author;
//     post.content = content;
//     res.json(post);
// });

// app.delete('/v1/posts/:id', (req, res) => {
//     const { id } = req.params;
//     const index = posts.findIndex(i => i.id === Number(id));
//     if (index === -1) {
//         return res.sendStatus(404);
//     }
//     const deletedPost = posts.splice(index, 1);
//     res.json(deletedPost);
// });


app.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
});