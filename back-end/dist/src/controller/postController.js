"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const postService_1 = __importDefault(require("../service/postService"));
class PostController {
    constructor() {
        this.postAdd = async (req, res) => {
            let post = await this.postService.postAdd(req.body);
            res.json(post);
        };
        this.postUpdate = async (req, res) => {
            let post = await this.postService.postUpdate(req.params.id, req.body);
            res.json(post);
        };
        this.postDelete = async (req, res) => {
            let post = await this.postService.postDelete(req.params.id);
            res.json(post);
        };
        this.postService = postService_1.default;
    }
}
exports.default = new PostController();
//# sourceMappingURL=postController.js.map