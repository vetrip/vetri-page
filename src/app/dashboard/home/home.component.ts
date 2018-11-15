import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public content: string;
  @ViewChild('mde') mde: SimpleMDE;
  public htmlContent: string;

  public authenticated: boolean = false;

  public currentUser: firebase.User;

  constructor(private fireAuth: AngularFireAuth) {}

  ngOnInit() {
    this.content = `# This is my first blog
    * list1
    * list2
    * list3

 #  title

       1. asda
       2. asdsa
       3. asd

   Colons can be used to align columns.

   | Tables        | Are           | Cool  |
   | ------------- |:-------------:| -----:|
   | col 3 is      | right-aligned | $1600 |
   | col 2 is      | centered      |   $12 |
   | zebra stripes | are neat      |    $1 |

           ![sample text](https://via.placeholder.com/250https://placeholder.com/)`;
    // this.fireAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
    // console.log(this.fireAuth.auth.currentUser);
    this.fireAuth.authState.subscribe(user => {
      this.currentUser = this.fireAuth.auth.currentUser;
      // user is signed in
      if (user) {
        // console.log(this.fireAuth.auth.currentUser);
        this.authenticated = true;
        // html = this.mde.codemirror.options.previewRender(this.content);
        //console.log(html);
      } else {
        this.authenticated = false;
        // this.mde.codemirror.options.readOnly = true;
        // this.mde.codemirror.options.previewRender('This is *example* Markdown');
        //const html = this.mde.codemirror.options.previewRender(this.content);
        //console.log(html);
      }
    });

    // this.editor.nativeElement.
    /*this.mde.codemirror.on('change', () => {
      console.log(this.mde.value);
    })*/

    /*this.mde.codemirror.on('change', () => {
      console.log('content changed');
      // this.htmlContent = this.mde.options.previewRender(this.mde.value());
    });*/

    // this.mde.
  }

  signIn() {
    this.fireAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  signOut() {
    this.fireAuth.auth
      .signOut()
      .then(() => (this.authenticated = false))
      .catch(() => console.error('error happened'));
  }
}
