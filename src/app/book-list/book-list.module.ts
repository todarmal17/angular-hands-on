import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListPageComponent } from './book-list-page/book-list-page.component';
import { SharedModule } from '../shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from '../shared/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    component: BookListPageComponent,
    canActivate: [AuthGuardService]
  }
];
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    BookListPageComponent
  ]
})
export class BookListModule { }
