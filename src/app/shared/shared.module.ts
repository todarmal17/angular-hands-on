import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuardService } from './auth-guard.service';
import { NavbarComponent } from './navbar/navbar.component';
import {
  MatToolbarModule,
  MatTooltipModule,
  MatFormFieldModule,
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatDialogModule,
  MatSnackBarModule
} from '@angular/material';
import { SessionManagerService } from './manager/session-manager.service';
import { AuthService } from './auth.service';
import { HttpClientModule } from '@angular/common/http';
import { AccessService } from './access/access.service';
import { BaseComponentComponent } from './BaseComponent/base-component/base-component.component';
import { UserManagerService } from './manager/user-manager.service';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    HttpClientModule,
    MatDialogModule,
    MatSnackBarModule,
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    NavbarComponent,
    MatToolbarModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatDialogModule,
    MatSnackBarModule,
    ReactiveFormsModule
  ],
  declarations: [
    NavbarComponent,
    BaseComponentComponent
  ],
  providers: [
    AuthGuardService,
    SessionManagerService,
    AccessService,
    UserManagerService
  ]
})
export class SharedModule { }
