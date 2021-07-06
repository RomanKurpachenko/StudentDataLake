import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckPointDialogComponent } from './check-point-dialog.component';

describe('CheckPointDialogComponent', () => {
    let component: CheckPointDialogComponent;
    let fixture: ComponentFixture<CheckPointDialogComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ CheckPointDialogComponent ]
        })
        .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CheckPointDialogComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});