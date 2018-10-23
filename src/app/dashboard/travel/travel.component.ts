import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Photo } from './model/photo';

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.css']
})
export class TravelComponent implements OnInit {
  photosCollection: AngularFirestoreCollection<Photo>
  photos: Observable<Photo[]>;
  constructor(private db: AngularFirestore) {
    this.photosCollection = db.collection<Photo>('photos');
    this.photos = this.photosCollection.valueChanges();
  }

  ngOnInit() {

  }

}
