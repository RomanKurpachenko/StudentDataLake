import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckpointDetailsComponent } from './checkpoint-details.component';

describe('CheckpointDetailsComponent', () => {
  let component: CheckpointDetailsComponent;
  let fixture: ComponentFixture<CheckpointDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckpointDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckpointDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
