import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TaskTwoWayDataBindingComponent } from './components/task-two-way-data-binding/task-two-way-data-binding.component';
import { TryoutsComponent } from './components/tryouts/tryouts.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { CustompipeComponent } from './components/custompipe/custompipe.component';
import { AppendPipe } from './pipes/append.pipe';
import { AppendCliPipe } from './pipes/append-cli.pipe';
import { SummaryPipe } from './pipes/summary.pipe';
import { PostComponent } from './components/post/post.component';
import { PostService } from './services/post.service';
import { PostListComponent } from './components/post-list/post-list.component';
import { SecondPostListComponent } from './components/second-post-list/second-post-list.component';
import { PostMainComponent } from './components/post-main/post-main.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskTwoWayDataBindingComponent,
    TryoutsComponent,
    DirectivesComponent,
    CustompipeComponent,
    AppendPipe,
    AppendCliPipe,
    SummaryPipe,
    PostComponent,
    PostListComponent,
    SecondPostListComponent,
    PostMainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
