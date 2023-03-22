import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { Book, InputBook } from './book';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) { }

  @Get()
  getAll(): Promise<Book[]> {
    return this.booksService.getAll();
  }

  @Get(':id')
  getOneById(@Param('id') id: string) {
    const parsedId = parseInt(id, 10);
    return this.booksService.getOneById(parsedId);
  }

  @Post()
  create(@Body() newBook: InputBook): Promise<Book> {
    return this.booksService.save(newBook);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updatedBook: Book) {
    return this.booksService.save(updatedBook);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<void> {
    const parsedId = parseInt(id, 10);
    return this.booksService.delete(parsedId);
  }
}
