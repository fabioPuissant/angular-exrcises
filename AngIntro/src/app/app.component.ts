import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title= 'ang-routing';
  constructor() {}
  ngOnInit() {
    const obsTest$ = new Observable(observer => {
      observer.next('Returned from Observable');
      observer.next('This is the second return from Observable');
      observer.next('This is the third return from Observable');
    }).subscribe( v=> {
      console.log(v);
    });



    const obsTest = () => 'returned from function';
    console.log(obsTest());
  };
}