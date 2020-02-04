import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { UserAuthenticationData } from '../../shared/models/models';
import { Router } from '@angular/router';
import { SessionManagerService } from 'src/app/shared/manager/session-manager.service';
import { UserManagerService } from 'src/app/shared/manager/user-manager.service';
import { BaseComponentComponent } from 'src/app/shared/BaseComponent/base-component/base-component.component';
import { MatDialog, MatSnackBar } from '@angular/material';
import { Subject } from 'rxjs';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent extends BaseComponentComponent implements OnInit {

  public loginForm: FormGroup;

  constructor(
    protected formBuilder: FormBuilder,
    protected userManager: UserManagerService,
    private router: Router,
    protected sessionService: SessionManagerService,
    protected authService: AuthService,
    protected snackBar?: MatSnackBar
  ) {
    super(snackBar);
  }

  ngOnInit() {

    if (this.sessionService.getSessionStatus()) {
      this.router.navigate(['/booklist']);
    }

    this.initForm();
  }

  /**
   * Initialize the form.
   */
  protected initForm(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  protected logIn(): void {

    if (this.loginForm.invalid) {

      this.openSnackBar('Please enter Username and password', 4000);

    } else {

      const userData: UserAuthenticationData = {
        username: this.loginForm.get('username').value,
        password: this.loginForm.get('password').value
      };

      this.userManager.userData = new UserAuthenticationData(userData.username, userData.password);

      this.userManager.authenticateUserManager().subscribe(async (isLoggedIn: boolean) => {
        if (isLoggedIn) {
          await this.sessionService.setSessionStatus(true);
          this.router.navigate(['/booklist']);
          this.openSnackBar('Logged in Successfully!', 2000);
          console.log('in LoggIn' + isLoggedIn);

          this.authService.isAuthenticated();

        } else {
          this.openSnackBar('Username or password is incorrect.', 4000);
        }
      });
    }

  }

}
