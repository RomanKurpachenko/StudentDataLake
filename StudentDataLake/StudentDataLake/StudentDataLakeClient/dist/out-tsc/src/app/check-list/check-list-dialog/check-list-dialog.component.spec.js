import { __awaiter } from "tslib";
import { TestBed } from '@angular/core/testing';
import { CheckListDialogComponent } from './check-list-dialog.component';
describe('CheckListDialogComponent', () => {
    let component;
    let fixture;
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield TestBed.configureTestingModule({
            declarations: [CheckListDialogComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(CheckListDialogComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=check-list-dialog.component.spec.js.map