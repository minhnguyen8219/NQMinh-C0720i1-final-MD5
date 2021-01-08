import { Component, OnInit } from '@angular/core';
import {Book} from '../../models/Book';
import {BookService} from '../../services/book.service';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.css']
})
export class DeleteBookComponent implements OnInit {

  // @ts-ignore
  book: Book;

  // @ts-ignore
  constructor(
    private bookService: BookService,
    private httpClient: HttpClient,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(paramap => {
      const id = paramap.get('id');
      console.log(id);
      this.bookService.getById(id).subscribe(book => {
        console.log(book);
        this.book = book;
      });
    });
  }

  // tslint:disable-next-line:typedef
  onDelete(id: any) {
    this.bookService.deleteById(id).subscribe(() => {
      alert('Đã xóa thành công!');
      this.router.navigate(['']);
    });
  }
}

