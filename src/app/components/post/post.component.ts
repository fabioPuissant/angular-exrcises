import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
  //,providers: [PostService] // register it as an injectible service for this component
})
export class PostComponent implements OnInit{
  @Input()
  post!: any;
  @Input()
  colorProvided!: any;
  @Output('onAddPost') addPostEmitter = new EventEmitter<any>();
  constructor() {  }
  ngOnInit(): void {}
  addAPost(title: string, postId: number): void {
    this.addPostEmitter.emit({id: postId, postTitle: title});
  }
}
