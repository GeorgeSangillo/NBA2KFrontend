import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Team } from 'src/app/models/team';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  private teamName = new BehaviorSubject(null);
  sharedName = this.teamName.asObservable();

  private team = new BehaviorSubject(null);
  sharedTeam = this.team.asObservable();

  constructor() { }

  updateName(teamName: string) {
    this.teamName.next(teamName);
  }

  onCreateTeam(team: Team) {
    this.team.next(team);
  }
}
