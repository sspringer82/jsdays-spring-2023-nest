import { Injectable, NotFoundException } from '@nestjs/common';
import { Book, InputBook } from './book';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book) private booksRepository: Repository<Book>,
  ) { }

  async getOneById(id: number): Promise<Book> {
    return this.booksRepository.findOneBy({ id });
  }

  async getAll(): Promise<Book[]> {
    return this.booksRepository.find();
  }

  async save(book: InputBook): Promise<Book> {
    return this.booksRepository.save(book);
  }

  async delete(id: number): Promise<void> {
    const book = await this.getOneById(id);
    await this.booksRepository.remove(book);
  }
}
