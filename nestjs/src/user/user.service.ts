

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entity/user.entity';
import { Repository } from 'typeorm';


@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>, // Inject repository vào service
  ) {}

  // Tạo mới một người dùng
  async create(userData: Partial<User>): Promise<User> {
    const user = this.userRepository.create(userData); // Tạo đối tượng User mới từ dữ liệu
    console.log("Conect")
    return this.userRepository.save(user); // Lưu vào cơ sở dữ liệu
  }

  // Lấy tất cả người dùng
  async findAll(): Promise<User[]> {
    return this.userRepository.find(); // Truy vấn tất cả người dùng
  }

  // Tìm người dùng theo ID
  async findOne(id: number): Promise<User> {
    return this.userRepository.findOne({ where: { id } }); // Truy vấn người dùng theo ID
  }

  // Cập nhật người dùng
  async update(id: number, userData: Partial<User>): Promise<User> {
    await this.userRepository.update(id, userData); // Cập nhật người dùng
    return this.findOne(id); // Trả về thông tin người dùng sau khi cập nhật
  }

  // Xóa người dùng
  async remove(id: number): Promise<void> {
    await this.userRepository.delete(id); // Xóa người dùng theo ID
  }
}

