import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {
  private count = 0;

  objArray: Array<any> = []


  deleteObjectAtIndex(index: number): void {
    this.objArray.splice(index, 1);
  }

  addAnEntry():void {

    this.objArray.push(this.count++);
  }

}
