import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewTeamComponent } from './view-team/view-team.component';


const routes: Routes = [
  { path: 'team/:teamName', component: ViewTeamComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
