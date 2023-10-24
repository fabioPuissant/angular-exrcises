import { Component } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-second-post-list',
  templateUrl: './second-post-list.component.html',
  styleUrls: ['./second-post-list.component.css']
})
export class SecondPostListComponent {


  posts!: Array<any>

  constructor(private postService: PostService) {
    this.getPosts();
    
  }
  ngOnInit(): void {
    //this.getPosts();
  }


  onAddPostHandler($event: any) {
    this.postService.addPost($event)
  }


  private getPosts(): void{
    this.posts = this.postService.getPosts();
  }
}
