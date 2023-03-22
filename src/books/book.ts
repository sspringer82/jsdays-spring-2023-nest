export type Book = {
  id: number;
  title: string;
  author: string;
  price: number;
  pages: number;
  year: number;
};

export type InputBook = Omit<Book, 'id'> & { id?: number };
