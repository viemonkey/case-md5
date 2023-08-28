declare class UserService {
    private userRepository;
    constructor();
    register: (users: any) => Promise<any>;
    checkUser: (users: any) => Promise<"User is not exist" | "Password is wrong" | {
        token: string;
        idUser: any;
        username: any;
        role: any;
    }>;
}
declare const _default: UserService;
export default _default;
