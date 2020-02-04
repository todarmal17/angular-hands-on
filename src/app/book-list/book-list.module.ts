import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { BookListPageComponent } from './book-list-page/book-list-page.component';
import { SharedModule } from '../shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from '../shared/auth-guard.service';
import { MatTableModule, MatPaginatorModule, MatSortModule, MatIconModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { BookDetailsFormComponent } from './book-details-form/book-details-form.component';

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
    RouterModule.forChild(routes),
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  declarations: [
    BookListPageComponent,
    BookDetailsFormComponent
  ],
  entryComponents: [
    BookDetailsFormComponent
  ],
  providers: [
    MatDatepickerModule,
    DatePipe
  ]
})
export class BookListModule { }
