# 01 - Controller und Service

Erzeuge ein neues Books-Modul (nest g module books), einen Books-Controller (nest g co books) und einen Books-Service (nest g service books).
Dieses Modul dient zur Verwaltungung von Büchern

```typescript
type Book = {
  id: number;
  title: string;
  author: string;
  price: number;
  pages: number;
  year: number;
};

type InputBook = Omit<Book, 'id'> & { id?: number };
```

Der Service soll für die Datenhaltung verantwortlich sein. Implementiere hierfür die vier Methoden:
* `getOneById(id: number): Promise<Book>` => auslesen eines Buchs
* `getAll(): Promise<Book[]>` => auslesen aller Bücher
* `create(book: InputBook) => Promise<Book>` => neues Buch erzeugen
* `update(id: number, book: Book) => Promise<Book>` => bestehendes Buch aktualisieren

Der Controller soll folgende Routen unterstützen:
* GET /books => alle Bucher auslesen
* GET /books/:id => ein Buch auslesen (@Param('id') id: string)
* POST /books => neues Buch anlegen (Body: InputBook) (@Body() newBook: InputBook)
* PUT /books/:id => bestehendes Buch aktualisieren (Body: Book)
* DELETE /books/:id => bestehendes Buch löschen