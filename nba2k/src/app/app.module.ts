import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewTeamComponent } from './view-team/view-team.component';
import { CreateTeamComponent } from './create-team/create-team.component';
import { UpdateTeamComponent } from './update-team/update-team.component';
import { PlayerService } from './player.service';
import { TeamService } from './team.service';

@NgModule({
  declarations: [
    AppComponent,
    ViewTeamComponent,
    CreateTeamComponent,
    UpdateTeamComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [PlayerService, TeamService],
  bootstrap: [AppComponent]
})
export class AppModule { }
