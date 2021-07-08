import { __awaiter } from "tslib";
import { TestBed } from '@angular/core/testing';
import { ChecklistDialogComponent } from './checklist-dialog.component';
describe('ChecklistDialogComponent', () => {
    let component;
    let fixture;
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield TestBed.configureTestingModule({
            declarations: [ChecklistDialogComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(ChecklistDialogComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=checklist-dialog.component.spec.js.map