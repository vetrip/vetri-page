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

  constructor() {}

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

    // this.editor.nativeElement.
    /*this.mde.codemirror.on('change', () => {
      console.log(this.mde.value);
    });*/

    /*this.mde.codemirror.on('change', () => {
      console.log('content changed');
      // this.htmlContent = this.mde.options.previewRender(this.mde.value());
    });*/

    // this.mde.
  }
}
