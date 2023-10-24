import { Component } from '@angular/core';

@Component({
  selector: 'app-task-two-way-data-binding',
  templateUrl: './task-two-way-data-binding.component.html',
  styleUrls: ['./task-two-way-data-binding.component.css']
})
export class TaskTwoWayDataBindingComponent {
postTitle!: string;
postDetails!: string;
postImage!: string;
hasBackground!: boolean;

}
