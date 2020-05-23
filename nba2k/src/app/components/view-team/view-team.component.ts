import { Component, OnInit } from '@angular/core';
import { Team } from '../../models/team';
import { TeamService } from '../../services/team/team.service';
import { PlayerService } from '../../services/player/player.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { SharedDataService } from 'src/app/services/shared-data/shared-data.service';

@Component({
  selector: 'app-view-team',
  templateUrl: './view-team.component.html',
  styleUrls: ['./view-team.component.css']
})
export class ViewTeamComponent implements OnInit {
  team: Team;

  constructor(private playServ: PlayerService, private teamServ: TeamService, private sharedData: SharedDataService,
              private route: ActivatedRoute, private location: Location) { }

  ngOnInit(): void {
    this.getTeam();
  }

  getTeam(): void {
    const teamName = this.route.snapshot.paramMap.get('teamName');
    this.sharedData.updateName(teamName);
    this.teamServ.getTeam(teamName)
      .subscribe(
        team => {
          this.team = team;
        }
      );
  }

}
