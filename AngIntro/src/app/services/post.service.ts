import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PostService {
    addPost(value: any) {
        this.postList.push(value);console.log(
            value
        )
    }

    private postList: Array<any> = [
        {id:1, postTitle: 'initial post'},
        {id:2, postTitle: 'The game of the year awards'},
        {id:3, postTitle: '7 exercises to six-pack abs'},
        {id:4, postTitle: 'Heal your body'},
        {id:5, postTitle: 'Azure Entra ID, the new and improved Azure Active Directory'},
        {id:6, postTitle: 'Rust lang for the 4th year chosen as favorite proglang'},
    ]
    //private posts = new Observable<Array<string>>();
    // getPosts(): Observable<Array<any>> {
    //     return of(this.postList);
    // }

    getPosts(): Array<string> {
        return this.postList;
    }
}