import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Photo } from './model/photo';

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.css']
})
export class TravelComponent implements OnInit {

  photos: Array<Photo> = new Array<Photo>();
  constructor(private db: AngularFirestore) { }

  ngOnInit() {
    this.db.collection('photos').valueChanges().subscribe(items => {
      items.forEach((item: Photo) => {
        this.photos.push(item);
        console.log(item)
      })
    })
  }

}
