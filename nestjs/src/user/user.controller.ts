
import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from 'src/entity/user.entity';

@Controller('users') // Định nghĩa endpoint cho người dùng
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Post()
  create(@Body() userData: User): Promise<User> {
    return this.userService.create(userData);
  }
  @Get()
  findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<User> {
    return this.userService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() userData: User): Promise<User> {
    return this.userService.update(id, userData);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.userService.remove(id);
  }
}

