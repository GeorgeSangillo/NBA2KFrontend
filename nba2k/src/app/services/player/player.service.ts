import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  private playUrl = 'http://localhost:9025/nba2kapi/player';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  /** GET all Players */
  getAllPlayers(): Observable<any> {
    const url = `${this.playUrl}/getAllPlayers`;
    return this.http.get<any>(url, this.httpOptions);
  }
}
