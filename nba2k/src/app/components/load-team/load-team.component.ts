import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedDataService } from 'src/app/services/shared-data/shared-data.service';

@Component({
  selector: 'app-load-team',
  templateUrl: './load-team.component.html',
  styleUrls: ['./load-team.component.css']
})
export class LoadTeamComponent implements OnInit {

  constructor(private sharedData: SharedDataService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const teamName = this.route.snapshot.paramMap.get('teamName');
    this.sharedData.updateName(teamName);
    this.router.navigate([`/team/${teamName}/view`]);
  }

}
