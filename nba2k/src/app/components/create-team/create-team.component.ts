import { Component, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/services/player/player.service';
import { TeamService } from 'src/app/services/team/team.service';
import { Player } from 'src/app/models/player';
import { Team } from 'src/app/models/team';
import { SharedDataService } from 'src/app/services/shared-data/shared-data.service';
import { Router } from '@angular/router';

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

  constructor(private playServ: PlayerService, private teamServ: TeamService, private sharedData: SharedDataService,
              private router: Router) { }

  ngOnInit(): void {
    this.sharedData.updateName(null);
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
    });
  }

  computeSalaries() {
    this.playersPG.forEach(pg => {
      if (+this.teamPlayers[0] === pg.playerId) {
        this.teamSalaries[0] = pg.salary;
      }
    });
    this.playersSG.forEach(sg => {
      if (+this.teamPlayers[1] === sg.playerId) {
        this.teamSalaries[1] = sg.salary;
      }
    });
    this.playersSF.forEach(sf => {
      if (+this.teamPlayers[2] === sf.playerId) {
        this.teamSalaries[2] = sf.salary;
      } else if (+this.teamPlayers[3] === sf.playerId) {
        this.teamSalaries[3] = sf.salary;
      }
    });
    this.playersPF.forEach(pf => {
      if (+this.teamPlayers[3] === pf.playerId) {
        this.teamSalaries[3] = pf.salary;
      }
    });
    this.playersC.forEach(c => {
      if (+this.teamPlayers[4] === c.playerId) {
        this.teamSalaries[4] = c.salary;
      }
    });
  }

  createTeam() {
    this.computeSalaries();
    this.teamSalaries.forEach(element => {
      this.teamSalary += element;
    });
    if (this.teamSalary <= 15 && this.teamName && this.teamPlayers[0] && this.teamPlayers[1] && this.teamPlayers[2] && this.teamPlayers[3]
        && this.teamPlayers[4]) {
      this.teamServ.createTeam(this.teamName, this.teamPlayers[0], this.teamPlayers[1], this.teamPlayers[2], this.teamPlayers[3],
                              this.teamPlayers[4]).subscribe(data => {
        console.log(data);
        this.sharedData.onCreateTeam(data);
      });
      this.router.navigate([`/team/${this.teamName}/load`]);
    } else {
      alert(`Team Salary: ${this.teamSalary} > 15`);
      this.teamSalary = 0;
    }
  }

}
