import { Request, Response } from "express";
declare class PostController {
    private postService;
    constructor();
    postAdd: (req: Request, res: Response) => Promise<void>;
    postUpdate: (req: Request, res: Response) => Promise<void>;
    postDelete: (req: Request, res: Response) => Promise<void>;
}
declare const _default: PostController;
export default _default;
