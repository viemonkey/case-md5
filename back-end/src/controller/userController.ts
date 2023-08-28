import { Request, Response } from "express";
import userService from "../service/userService";

class UserController {

    login = async (req: Request, res: Response) => {
        let resultCheck = await userService.checkUser(req.body);
        res.status(200).json(resultCheck);
    }

    register = async (req: Request, res: Response) => {
        let registerNewAccount = await userService.register(req.body);
        res.json(registerNewAccount)
        
    }
}



export default new UserController();