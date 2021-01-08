import { Component, OnInit } from '@angular/core';
import {BookService} from '../../services/book.service';
import {Book} from '../../models/Book';

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.css']
})
export class ListBookComponent implements OnInit {

  // @ts-ignore
  books: Book[];
  total?: string;

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.bookService.getAll().subscribe(data => {
      this.books = data;
      this.total = 'Có ' + this.books.length + ' cuốn sách';
      console.log(this.total);
      console.log(data);
    });
  }
}
