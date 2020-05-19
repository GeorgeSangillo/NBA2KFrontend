import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedDataService } from 'src/app/services/shared-data/shared-data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  teamName: string;

  constructor(private sharedData: SharedDataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.sharedData.sharedName.subscribe(teamName => this.teamName = teamName);
  }

}
