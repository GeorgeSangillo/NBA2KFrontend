import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewTeamComponent } from './components/view-team/view-team.component';
import { CreateTeamComponent } from './components/create-team/create-team.component';
import { UpdateTeamComponent } from './components/update-team/update-team.component';
import { PlayerService } from './services/player/player.service';
import { TeamService } from './services/team/team.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListOfTeamsComponent } from './components/list-of-teams/list-of-teams.component';
import { LoadTeamComponent } from './components/load-team/load-team.component';
import { SharedDataService } from './services/shared-data/shared-data.service';
import { CompeteTeamComponent } from './components/compete-team/compete-team.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewTeamComponent,
    CreateTeamComponent,
    UpdateTeamComponent,
    NavbarComponent,
    ListOfTeamsComponent,
    LoadTeamComponent,
    CompeteTeamComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [PlayerService, TeamService, SharedDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
