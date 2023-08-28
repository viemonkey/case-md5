"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Users_1 = require("../entity/Users");
const data_source_1 = require("../configs/data-source");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const jwt_1 = require("../middleware/jwt");
class UserService {
    constructor() {
        this.register = async (users) => {
            users.password = await bcrypt_1.default.hash(users.password, 10);
            return this.userRepository.save(users);
        };
        this.checkUser = async (users) => {
            let userFind = await this.userRepository.findOneBy({ username: users.username });
            if (!userFind) {
                return 'User is not exist';
            }
            else {
                let passWordCompare = await bcrypt_1.default.compare(users.password, userFind.password);
                if (passWordCompare) {
                    let payload = {
                        idUser: userFind.id,
                        username: userFind.username,
                        role: userFind.role
                    };
                    return {
                        token: jsonwebtoken_1.default.sign(payload, jwt_1.SECRET, {
                            expiresIn: 36000 * 10 * 100
                        }),
                        idUser: userFind.id,
                        username: userFind.username,
                        role: userFind.role
                    };
                }
                else {
                    return 'Password is wrong';
                }
            }
        };
        this.userRepository = data_source_1.AppDataSource.getRepository(Users_1.Users);
    }
}
exports.default = new UserService();
//# sourceMappingURL=userService.js.map