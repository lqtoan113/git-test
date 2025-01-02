import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { LoggerMiddleware } from './cats/middleware/logger.middleware';
import { CatsController } from './cats/cats.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres', // Sử dụng PostgreSQL
      url: process.env.DATABASE_URL, // Thông tin kết nối của bạn
      synchronize: true, // Đồng bộ các thay đổi schema (lưu ý khi sử dụng trong môi trường sản xuất)
      autoLoadEntities: true, // Tự động tải các entities
    }),
    TypeOrmModule.forFeature([User]), // Đăng ký User entity
    UserModule,
    CatsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .exclude(
        { path: 'cats', method: RequestMethod.GET }
      )
      .forRoutes(CatsController);
  }
}
