
import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, Query, Request, UseInterceptors } from '@nestjs/common';
import { CreateCatDto, ListAllEntities, UpdateCatDto } from './dto/cats.dto';
import { CatsService } from './cats.service';
import { Cat } from './interface/cat.interface';
import { LoggingInterceptor } from './interceptor/logging.interceptor';

@Controller('cats')
@UseInterceptors(LoggingInterceptor)
export class CatsController {

    constructor(private catsService: CatsService) { }

    @Get()
    async findAll(): Promise<Cat[]> {
         
        console.log("This action return all cats")
        
        return this.catsService.findAll();
    }

    @Post()
    create(@Body() createCatDto: CreateCatDto) {

        this.catsService.create(createCatDto);

        console.log(createCatDto);

        return 'This action add a news cat'
    }

    @Get(':id')
    findOne(@Param('id') id: string) {

        console.log(id);

        return `This action returns a #${id} cat`;
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {

        console.log(id);

        return `This action updates a #${id} cat`;
    }

    @Delete(':id')
    remove(@Param('id') id: string) {

        console.log(id);

        return `This action removes a #${id} cat`;
    }

}
