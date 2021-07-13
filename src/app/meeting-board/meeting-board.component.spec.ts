import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingBoardComponent } from './meeting-board.component';

describe('MeetingBoardComponent', () => {
  let component: MeetingBoardComponent;
  let fixture: ComponentFixture<MeetingBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeetingBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetingBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
