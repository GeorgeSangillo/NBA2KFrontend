import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompeteTeamComponent } from './compete-team.component';

describe('CompeteTeamComponent', () => {
  let component: CompeteTeamComponent;
  let fixture: ComponentFixture<CompeteTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompeteTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompeteTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
