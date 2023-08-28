"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Posts_1 = require("../entity/Posts");
const data_source_1 = require("../configs/data-source");
class PostService {
    constructor() {
        this.repository = data_source_1.AppDataSource.getRepository(Posts_1.Posts);
        this.postAdd = async (posts) => {
            let post = await this.repository.save(posts);
            return post;
        };
        this.postUpdate = (postId, newPost) => {
            let post = this.repository.update(postId, newPost);
            return post;
        };
        this.postDelete = async (postId) => {
            let post = this.repository.delete(postId);
            return post;
        };
    }
}
exports.default = new PostService();
//# sourceMappingURL=postService.js.map