import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-load-team',
  templateUrl: './load-team.component.html',
  styleUrls: ['./load-team.component.css']
})
export class LoadTeamComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const teamName = this.route.snapshot.paramMap.get('teamName');
    this.router.navigate([`/team/${teamName}/view`]);
  }

}
