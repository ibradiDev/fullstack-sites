import { getPosts, insertPost, deletePost } from "./handlers";

module.exports = (routes) => {
    routes.get("/", getPosts);
    routes.post("/insert", insertPost);
    routes.delete("/delete/:id", deletePost);
}