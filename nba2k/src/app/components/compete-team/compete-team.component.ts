import { Component, OnInit } from '@angular/core';
import { TeamService } from 'src/app/services/team/team.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-compete-team',
  templateUrl: './compete-team.component.html',
  styleUrls: ['./compete-team.component.css']
})
export class CompeteTeamComponent implements OnInit {
  result;
  teamNames = ['', ''];

  constructor(private teamServ: TeamService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.competeTeams();
  }

  competeTeams() {
    this.teamNames[0] = this.route.snapshot.paramMap.get('teamName');
    this.teamNames[1] = 'NumbaOne';
    this.teamServ.competeTeams(this.teamNames).subscribe( result => {
      this.result = result[0];
    });
  }

}
