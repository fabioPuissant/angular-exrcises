import { Component, OnInit } from '@angular/core';


const ROWS_HEIGHT: {[id:number]: number} = {1: 400, 3: 355, 4: 350} // says it is an object with key 'id' that is a number, the value to which the key maps is a number

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  cols = 3;
  category: string|undefined;
  rowHeight = ROWS_HEIGHT[this.cols]; // this is a nice to know

  constructor() {}
  
  ngOnInit(): void {

  }
  
  onColumnsCountChange(colsNumber: number) {
    if (colsNumber == 1 || colsNumber == 3 || colsNumber == 4  ){
      this.cols = colsNumber

      this.rowHeight = ROWS_HEIGHT[this.cols];
    }
  }
  onShowCategory(chosenCategory: string): void {
    this.category = chosenCategory;
  }
}
