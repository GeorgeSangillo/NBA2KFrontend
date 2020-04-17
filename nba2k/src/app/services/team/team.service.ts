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
    console.log('URL: ' + url);
    return this.http.get<Team>(url, this.httpOptions);
  }
}
