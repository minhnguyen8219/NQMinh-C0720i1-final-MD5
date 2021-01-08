import { Component, OnInit } from '@angular/core';
import {BookService} from '../../services/book.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, Validators} from '@angular/forms';
import {Book} from '../../models/Book';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {

  // @ts-ignore
  bookForm: FormGroup;

  constructor(
    private bookService: BookService,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.bookForm = this.fb.group({
      title: ['', [Validators.required]],
      author: ['', [Validators.required]],
      description: ['', [Validators.required]],
    });
  }

  // tslint:disable-next-line:typedef
  createBook() {
    const book: Book = this.bookForm.value;
    console.log(book);
    this.bookService.create(book).subscribe(() => {
      alert('Thêm mới thành công!');
      this.router.navigate(['']);
    });
  }

}
