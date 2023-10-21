import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {
    addPost(value: any) {
        this.postList.push(value);
    }
    private postList: Array<any> = [
        {id:1, postTitle: 'initial post'},
        {id:2, postTitle: 'The game of the year awards'},
        {id:3, postTitle: '7 exercises to six-pack abs'},
        {id:4, postTitle: 'Heal your body'},
        {id:5, postTitle: 'Azure Entra ID, the new and improved Azure Active Directory'},
        {id:6, postTitle: 'Rust lang for the 4th year chosen as favorite proglang'},
    ]
Q
    getPosts(): Array<any> {
        return this.postList.copyWithin(-1, 0);
    }


}