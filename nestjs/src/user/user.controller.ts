
import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from 'src/entity/user.entity';

@Controller('users') // Định nghĩa endpoint cho người dùng
export class UserController {
  constructor(private readonly userService: UserService) {}

  // Tạo người dùng mới
  @Post()
  create(@Body() userData: User): Promise<User> {
    return this.userService.create(userData); // Gọi service để tạo người dùng
  }

  // Lấy danh sách tất cả người dùng
  @Get()
  findAll(): Promise<User[]> {
    return this.userService.findAll(); // Gọi service để lấy danh sách người dùng
  }

  // Lấy người dùng theo ID
  @Get(':id')
  findOne(@Param('id') id: number): Promise<User> {
    return this.userService.findOne(id); // Gọi service để tìm người dùng theo ID
  }

  // Cập nhật người dùng
  @Put(':id')
  update(@Param('id') id: number, @Body() userData: User): Promise<User> {
    return this.userService.update(id, userData); // Gọi service để cập nhật người dùng
  }

  // Xóa người dùng
  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.userService.remove(id); // Gọi service để xóa người dùng
  }
}

