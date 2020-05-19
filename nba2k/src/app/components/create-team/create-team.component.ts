import { Component, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/services/player/player.service';
import { TeamService } from 'src/app/services/team/team.service';
import { Player } from 'src/app/models/player';
import { Team } from 'src/app/models/team';

@Component({
  selector: 'app-create-team',
  templateUrl: './create-team.component.html',
  styleUrls: ['./create-team.component.css']
})
export class CreateTeamComponent implements OnInit {

  playersPG: Player[];
  playersSG: Player[];
  playersSF: Player[];
  playersPF: Player[];
  playersC: Player[];

  team: Team;
  teamName: string;
  teamPlayers: number[];
  teamSalaries: number[];
  teamSalary: number;

  test: any;

  constructor(private playServ: PlayerService, private teamServ: TeamService) { }

  ngOnInit(): void {
    this.getAllPlayers();
    this.teamPlayers = [0, 0, 0, 0, 0];
    this.teamSalaries = [0, 0, 0, 0, 0];
    this.teamSalary = 0;
  }

  getAllPlayers() {
    this.playServ.getAllPlayers().subscribe(players => {
      this.playersPG = players.POINT_GUARD;
      this.playersSG = players.SHOOTING_GUARD;
      this.playersSF = players.SMALL_FORWARD;
      this.playersPF = players.POWER_FORWARD;
      this.playersC = players.CENTER;
      console.log(this.playersSF);
    });
  }

  createTeam() {
    this.teamName = 'Testing';
    this.teamSalaries.forEach(element => {
      this.teamSalary += element;
    });
    console.log(this.teamSalary);
    if (this.teamSalary <= 15 && this.teamName && this.teamPlayers[0] && this.teamPlayers[1] && this.teamPlayers[2] && this.teamPlayers[3] && this.teamPlayers[4]) {
      this.teamServ.createTeam(this.teamName, this.teamPlayers[0], this.teamPlayers[1], this.teamPlayers[2], this.teamPlayers[3], this.teamPlayers[4]).subscribe(data => {
        console.log(data);
      });
    }
  }

}
