import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckListDetailsComponent } from './check-list-details.component';

describe('CheckListDetailsComponent', () => {
  let component: CheckListDetailsComponent;
  let fixture: ComponentFixture<CheckListDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckListDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckListDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
