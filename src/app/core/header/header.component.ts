import { Component, OnInit } from '@angular/core';
import { AuthcontextService } from '../services/authcontext.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  //currentUser: any;
  authUserObs: Observable<firebase.User>;
  constructor(private authctxService: AuthcontextService) {}

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
}
