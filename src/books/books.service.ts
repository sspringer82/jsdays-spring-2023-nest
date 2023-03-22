import { Injectable, NotFoundException } from '@nestjs/common';
import { Book, InputBook } from './book';

@Injectable()
export class BooksService {
  private books: Book[] = [];

  async getOneById(id: number): Promise<Book> {
    const book = this.books.find((b) => b.id === id);
    if (!book) {
      throw new NotFoundException();
    }
    return book;
  }

  async getAll(): Promise<Book[]> {
    return this.books;
  }

  async create(book: InputBook): Promise<Book> {
    const id =
      this.books.length === 0
        ? 1
        : Math.max(...this.books.map((b) => b.id)) + 1;
    const newBook: Book = { ...book, id };
    this.books.push(newBook);
    return newBook;
  }

  async update(id: number, book: Book): Promise<Book> {
    const index = this.books.findIndex((b) => b.id === id);
    this.books[index] = book;

    return book;
  }

  async delete(id: number): Promise<void> {
    const index = this.books.findIndex((b) => b.id === id);
    this.books.splice(index, 1);
  }
}
