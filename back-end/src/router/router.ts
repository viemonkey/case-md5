import { Router } from "express"
import postRouter from "./postRouter";
import userRouter from "./userRouter";

const router = Router();
router.use("", userRouter);
router.use("", postRouter);

export default router;
