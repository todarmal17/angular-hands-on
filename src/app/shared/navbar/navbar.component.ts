import { Component, OnInit, OnDestroy } from '@angular/core';
import { SessionManagerService } from '../manager/session-manager.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {

  public showLogoutBtn = false;
  private subscriptions: Subscription;

  constructor(
    protected sessionService: SessionManagerService,
    private router: Router,
    protected authService: AuthService
  ) { }

  ngOnInit() {
    console.log('in Navbar Outside');

    this.subscriptions = this.authService.connectToAuth().subscribe((isLoggedIn: boolean) => {
      console.log('in Navbar' + isLoggedIn);

      this.showLogoutBtn = isLoggedIn;

      console.log(this.showLogoutBtn);

    });
    this.showLogoutBtn = this.authService.isAuthenticated();
  }

  public logout(): void {
    this.showLogoutBtn = false;
    this.sessionService.setSessionStatus(false);
    this.router.navigate(['/login']);
  }

  ngOnDestroy(): void {

    this.subscriptions.unsubscribe();
  }
}
