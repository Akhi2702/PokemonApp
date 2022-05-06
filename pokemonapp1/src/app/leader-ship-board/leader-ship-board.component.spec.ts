import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaderShipBoardComponent } from './leader-ship-board.component';

describe('LeaderShipBoardComponent', () => {
  let component: LeaderShipBoardComponent;
  let fixture: ComponentFixture<LeaderShipBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaderShipBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaderShipBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
