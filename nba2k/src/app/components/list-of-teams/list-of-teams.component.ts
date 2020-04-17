import { Component, OnInit } from '@angular/core';
import { Team } from 'src/app/models/team';
import { TeamService } from 'src/app/services/team/team.service';

@Component({
  selector: 'app-list-of-teams',
  templateUrl: './list-of-teams.component.html',
  styleUrls: ['./list-of-teams.component.css']
})
export class ListOfTeamsComponent implements OnInit {

  teams: Team[];

  constructor(private teamServ: TeamService) { }

  ngOnInit(): void {
    this.teamServ.getAllTeams().subscribe(
      teams => {
        this.teams = teams;
      }
    );
  }

}
