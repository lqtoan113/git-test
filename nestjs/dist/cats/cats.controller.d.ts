import { CreateCatDto, UpdateCatDto } from './dto/cats.dto';
import { CatsService } from './cats.service';
import { Cat } from './interface/cat.interface';
export declare class CatsController {
    private catsService;
    constructor(catsService: CatsService);
    findAll(): Promise<Cat[]>;
    create(createCatDto: CreateCatDto): string;
    findOne(id: string): string;
    update(id: string, updateCatDto: UpdateCatDto): string;
    remove(id: string): string;
}
