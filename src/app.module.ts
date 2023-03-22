import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './books/books.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from './books/book';

@Module({
  imports: [
    BooksModule,
    TypeOrmModule.forRoot({
      synchronize: true,
      logging: false,
      autoSave: true,
      location: 'database.sqlite',
      entities: [Book],
      migrations: [],
      subscribers: [],
      type: 'sqljs',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
