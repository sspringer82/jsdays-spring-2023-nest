import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('books')
export class Book {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({
    description: 'Title of the book',
    example: 'Die kleine Raupe Nimmersatt',
  })
  @Column()
  @IsNotEmpty()
  title: string;

  @ApiProperty()
  @Column()
  author: string;

  @ApiProperty()
  @Column()
  price: number;

  @ApiProperty()
  @Column()
  pages: number;

  @ApiProperty({
    description: 'Release year of the book',
    example: 2022,
  })
  @Column()
  year: number;
}

export type InputBook = Omit<Book, 'id'> & { id?: number };
