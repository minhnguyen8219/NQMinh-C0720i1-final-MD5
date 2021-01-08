import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListBookComponent} from './components/list-book/list-book.component';
import {DetailBookComponent} from './components/detail-book/detail-book.component';
import {CreateBookComponent} from './components/create-book/create-book.component';
import {UpdateBookComponent} from './components/update-book/update-book.component';
import {DeleteBookComponent} from './components/delete-book/delete-book.component';

const routes: Routes = [
  {
    path: '',
    component: ListBookComponent
  },
  {
    path: 'detail-book/:id',
    component: DetailBookComponent
  },
  {
    path: 'create-book',
    component: CreateBookComponent
  },
  {
    path: 'delete-book/:id',
    component: DeleteBookComponent
  },
  {
    path: 'update-book/:id',
    component: UpdateBookComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
