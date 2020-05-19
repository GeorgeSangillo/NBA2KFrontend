import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewTeamComponent } from './components/view-team/view-team.component';
import { CreateTeamComponent } from './components/create-team/create-team.component';
import { LoadTeamComponent } from './components/load-team/load-team.component';


const routes: Routes = [
  { path: 'team/create', component: CreateTeamComponent },
  { path: 'team/:teamName/load', component: LoadTeamComponent },
  { path: 'team/:teamName/view', component: ViewTeamComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
