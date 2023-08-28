"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const postController_1 = __importDefault(require("../controller/postController"));
const postRouter = (0, express_1.Router)();
postRouter.post("/api/posts", postController_1.default.postAdd);
postRouter.put("/api/post/:id", postController_1.default.postUpdate);
postRouter.delete("/api/post/:id", postController_1.default.postDelete);
exports.default = postRouter;
//# sourceMappingURL=postRouter.js.map