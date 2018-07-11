import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { QuestionComponent } from './question/question.component';
import { ResultComponent } from './result/result.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "question/:id",
    component: QuestionComponent
  },
  {
    path: "result",
    component: ResultComponent
  },
  {
    // DEFAULT PATHING
    path: "",
    redirectTo: "/",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
