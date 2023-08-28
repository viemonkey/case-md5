import { Posts } from "../entity/Posts";
import { AppDataSource } from "../configs/data-source";

class PostService {
    private repository = AppDataSource.getRepository(Posts);

    postAdd = async (posts) => {
        let post = await this.repository.save(posts);
        return post;
    }

    postUpdate = (postId, newPost) => {
        let post = this.repository.update(postId, newPost);
        return post;
    }

    postDelete = async (postId) => {
        let post = this.repository.delete(postId);
        return post;
    }
}

export default new PostService();