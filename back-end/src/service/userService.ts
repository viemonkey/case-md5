import { Users } from "../entity/Users";
import { AppDataSource } from "../configs/data-source";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { SECRET } from "../middleware/jwt";

class UserService {
    private userRepository;

    constructor() {
        this.userRepository = AppDataSource.getRepository(Users);
    }

    register = async (users) => {
        users.password = await bcrypt.hash(users.password, 10);
        return this.userRepository.save(users);
    }

    checkUser = async (users) => {
        let userFind = await this.userRepository.findOneBy({ username: users.username });
        if (!userFind) {
            return 'User is not exist';
        } else {
            let passWordCompare = await bcrypt.compare(users.password, userFind.password);
            if (passWordCompare) {
                let payload = {
                    idUser: userFind.id,
                    username: userFind.username,
                    role: userFind.role
                }
                return {
                    token: jwt.sign(payload, SECRET, {
                        expiresIn: 36000 * 10 * 100
                    }),
                    idUser: userFind.id,
                    username: userFind.username,
                    role: userFind.role
                }
            } else {
                return 'Password is wrong'
            }
        }
    }
}

export default new UserService();