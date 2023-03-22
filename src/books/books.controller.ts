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
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) { }

  @Get()
  @ApiOperation({ summary: 'Get all books' })
  @ApiResponse({
    status: 200,
    description: 'all the books',
    type: Book,
    isArray: true
  })
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
