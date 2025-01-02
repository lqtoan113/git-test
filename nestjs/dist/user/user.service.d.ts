import { User } from 'src/entity/user.entity';
import { Repository } from 'typeorm';
export declare class UserService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    create(userData: Partial<User>): Promise<User>;
    findAll(): Promise<User[]>;
    findOne(id: number): Promise<User>;
    update(id: number, userData: Partial<User>): Promise<User>;
    remove(id: number): Promise<void>;
}
