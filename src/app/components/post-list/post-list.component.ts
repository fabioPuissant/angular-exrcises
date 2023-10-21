import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts!: Array<any>

  constructor(private postService: PostService) {
    
  }
  ngOnInit(): void {
    this.getPosts();
  }


  onAddPostHandler($event: any) {
    this.postService.addPost($event.value)
  }


  private getPosts(): void{
    this.posts = this.postService.getPosts();
  }

}
