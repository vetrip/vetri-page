import { Component, OnInit, ViewChild } from '@angular/core';
import { BlogsService } from 'src/app/core/services/blogs.service';
import { Blog } from './../../../core/model/blog.model';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  content: string;
  title: FormControl = new FormControl();
  constructor(private blogsService: BlogsService) {}

  ngOnInit() {}

  addBlog() {
    console.log(this.content);
    let blog: Blog = {
      title: this.title.value,
      content: this.content,
      likes: 0
    };
    this.blogsService.addBlog(blog);
  }
}
