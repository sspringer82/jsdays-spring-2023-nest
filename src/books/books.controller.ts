import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { Book, InputBook } from './book';
import { ApiBearerAuth, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { NumberParameter } from './number-parameter';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('books')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
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
  getOneById(@Param() params: NumberParameter) {
    const parsedId = parseInt(params.id, 10);
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
