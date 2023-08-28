declare class PostService {
    private repository;
    postAdd: (posts: any) => Promise<any>;
    postUpdate: (postId: any, newPost: any) => Promise<import("typeorm").UpdateResult>;
    postDelete: (postId: any) => Promise<import("typeorm").DeleteResult>;
}
declare const _default: PostService;
export default _default;
