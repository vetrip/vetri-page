import { Component, OnInit } from '@angular/core';
import { AuthcontextService } from '../services/authcontext.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  //currentUser: any;
  authUserObs: Observable<firebase.User>;
  constructor(private authctxService: AuthcontextService, private router: Router) {}

  ngOnInit() {
    this.authUserObs = this.authctxService.authObserver();
  }

  signIn() {
    this.authctxService.signIn();
  }

  signOut() {
    this.authctxService.signOut().then(() => {
      console.log('logged out');
    });
  }

  goToAdmin() {
    this.router.navigate(['/admin']);
  }
}
