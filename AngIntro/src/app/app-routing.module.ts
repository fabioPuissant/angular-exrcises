import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskTwoWayDataBindingComponent } from './components/task-two-way-data-binding/task-two-way-data-binding.component';
import { TryoutsComponent } from './components/tryouts/tryouts.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { CustompipeComponent } from './components/custompipe/custompipe.component';
import { PostComponent } from './components/post/post.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostMainComponent } from './components/post-main/post-main.component';
import { FormsExampleComponent } from './components/forms-example/forms-example.component';
import { ObservableExercisesComponent } from './components/observable-exercises/observable-exercises.component';

const routes: Routes = [
  {path: '', redirectTo: 'tryouts', pathMatch: 'full'}, 
  {path:'tryouts',component: TryoutsComponent},
  {path: 'twoway', component: TaskTwoWayDataBindingComponent},
  {path: 'directives', component: DirectivesComponent},
  {path: 'custom-pipes', component: CustompipeComponent},
  {path: 'service-examples', component: PostMainComponent},
  {path: 'forms-example', component: FormsExampleComponent},
  {path: 'observable-example', component: ObservableExercisesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
