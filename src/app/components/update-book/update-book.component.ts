import {Component, OnInit} from '@angular/core';
import {BookService} from '../../services/book.service';
import {Book} from '../../models/Book';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {

  // @ts-ignore
  book: Book;
  // @ts-ignore
  bookForm: FormGroup;

  constructor(
    private bookService: BookService,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router
  ) {
  }

  ngOnInit(): void {

    this.bookForm = this.fb.group({
      title: ['', [Validators.required]],
      author: ['', [Validators.required]],
      description: ['', [Validators.required]],
    });

    this.activatedRoute.paramMap.subscribe(paramap => {
      const id = paramap.get('id');
      console.log(id);
      // @ts-ignore
      this.bookService.getById(id).subscribe(result => {
        this.book = result;
        console.log(this.book);
        this.bookForm.patchValue({
          title: this.book.title,
          author: this.book.author,
          description: this.book.description,
        });
      });
    });
  }

  updateBook() {
    const book = this.bookForm.value;
    console.log(book);
    // @ts-ignore
    this.bookService.updateById(this.book.id, book).subscribe(() => {
      alert('Cập nhật thành công!');
      this.router.navigate(['']);
    });
  }

}
