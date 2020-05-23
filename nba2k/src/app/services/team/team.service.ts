import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Team } from '../../models/team';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  private teamUrl = 'http://localhost:9025/nba2kapi/team';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  /** GET all Teams */
  getAllTeams(): Observable<Team[]> {
    const url = `${this.teamUrl}/getAllTeams`;
    return this.http.get<Team[]>(url, this.httpOptions);
  }

  /** GET Team by teamName. */
  getTeam(teamName: string): Observable<Team> {
    const url = `${this.teamUrl}/getTeam?teamName=${teamName}`;
    return this.http.get<Team>(url, this.httpOptions);
  }

    /** POST new Team. */
    createTeam(teamName: string, playerOneId: number, playerTwoId: number, playerThreeId: number, playerFourId: number,
               playerFiveId: number): Observable<Team> {
      const url = `${this.teamUrl}/createTeam`;
      return this.http.post<Team>(url, {teamName, playerOneId, playerTwoId, playerThreeId, playerFourId, playerFiveId}, this.httpOptions);
    }

      /** GET Result of Team vs Teams by teamNames. */
  competeTeams(teamNames: string[]): Observable<string[]> {
    const url = `${this.teamUrl}/${teamNames[0]}vs${teamNames[1]}`;
    return this.http.get<string[]>(url, this.httpOptions);
  }
}
