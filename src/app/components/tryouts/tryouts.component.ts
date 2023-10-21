import { Component } from '@angular/core';

@Component({
  selector: 'app-tryouts',
  templateUrl: './tryouts.component.html',
  styleUrls: ['./tryouts.component.css']
})
export class TryoutsComponent {
  usrname: string = "Put your name here";
  keyUp(username:any) {
  console.log('Inputed pressed', username)
}
  title = 'AngIntro';
}
