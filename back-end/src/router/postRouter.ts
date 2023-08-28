import { Router } from "express";
import postController from "../controller/postController";

const postRouter = Router();
postRouter.post("/api/posts", postController.postAdd);
postRouter.put("/api/post/:id", postController.postUpdate);
postRouter.delete("/api/post/:id", postController.postDelete);

export default postRouter;