import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './auth-guard.service';

const routes: Routes = [
  { path: 'login', loadChildren: () => import('../login/login.module').then(m => m.LoginModule) },
  { path: 'booklist', loadChildren: () => import('../book-list/book-list.module').then(m => m.BookListModule) },
  {
    path: '',
    canActivateChild: [AuthGuardService],
    children: [
      {
        path: 'start',
        canActivate: [AuthGuardService],
        redirectTo: '/booklist',
        pathMatch: 'full'
      },
      {
        path: '',
        redirectTo: '/booklist',
        pathMatch: 'full',
      },
    ]
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
