import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  private teamName = new BehaviorSubject(null);
  sharedName = this.teamName.asObservable();

  constructor() { }

  updateName(teamName: string) {
    this.teamName.next(teamName);
  }
}
