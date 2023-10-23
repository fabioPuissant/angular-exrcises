import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
  //,providers: [PostService] // register it as an injectible service for this component
})
export class PostComponent implements OnInit{
  @Input()
  post!: Post;
  @Input()
  colorProvided!: any;
  @Output('onAddPost') addPostEmitter = new EventEmitter<Post>();
  constructor() {  }
  ngOnInit(): void {}
  addAPost(title: string, postId: number): void {
    this.addPostEmitter.emit({id: -1, postTitle: title});
  }
}
