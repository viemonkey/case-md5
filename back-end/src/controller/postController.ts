import { Request, Response } from "express";
import postService from "../service/postService";

class PostController {
    private postService;

    constructor() {
        this.postService = postService;
    }

    postAdd = async (req: Request, res: Response) => {
        let post = await this.postService.postAdd(req.body);
        res.json(post)
    }

    postUpdate = async (req: Request, res: Response) => {
        let post = await this.postService.postUpdate(req.params.id, req.body);
        res.json(post);
    }

    postDelete = async (req: Request, res: Response) => {
        let post = await this.postService.postDelete(req.params.id);
        res.json(post);
    }
}

export default new PostController();