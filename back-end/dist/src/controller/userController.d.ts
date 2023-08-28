import { Request, Response } from "express";
declare class UserController {
    login: (req: Request, res: Response) => Promise<void>;
    register: (req: Request, res: Response) => Promise<void>;
}
declare const _default: UserController;
export default _default;
