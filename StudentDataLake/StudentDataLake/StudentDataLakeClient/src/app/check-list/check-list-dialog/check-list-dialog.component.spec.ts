import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckListDialogComponent } from './check-list-dialog.component';

describe('CheckListDialogComponent', () => {
    let component: CheckListDialogComponent;
    let fixture: ComponentFixture<CheckListDialogComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ CheckListDialogComponent ]
        })
        .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CheckListDialogComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});