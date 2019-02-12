import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { defineBase } from '@angular/core/src/render3';
import { Blog } from './../model/blog.model';

@Injectable({
  providedIn: 'root'
})
export class BlogsService {
  blogs: AngularFirestoreCollection<Blog>;
  blogDoc: AngularFirestoreDocument<Blog>;

  constructor(private afs: AngularFirestore) {
    this.blogs = this.afs.collection<Blog>('blogs');
  }

  addBlog(blog: Blog) {
    this.blogs.add(blog);
  }

  updateBlog(id: string, blog: Blog) {
    this.blogDoc = this.afs.doc<Blog>(`blogs/${id}`);
    this.blogDoc.update(blog);
  }

  deleteBlog(id: string) {
    this.blogDoc = this.afs.doc<Blog>(`blogs/${id}`);
    this.blogDoc.delete();
  }
}
