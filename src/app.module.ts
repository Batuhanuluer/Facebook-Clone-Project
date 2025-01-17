import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { PostModule } from './post/post.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'localhost',
      password: 'kaju',
      database: 'facebook-clone',
      autoLoadEntities: true,
      synchronize: true,
    }),
    UserModule,
    PostModule

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
