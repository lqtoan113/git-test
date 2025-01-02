import { UserService } from './user.service';
import { User } from 'src/entity/user.entity';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(userData: User): Promise<User>;
    findAll(): Promise<User[]>;
    findOne(id: number): Promise<User>;
    update(id: number, userData: User): Promise<User>;
    remove(id: number): Promise<void>;
}
