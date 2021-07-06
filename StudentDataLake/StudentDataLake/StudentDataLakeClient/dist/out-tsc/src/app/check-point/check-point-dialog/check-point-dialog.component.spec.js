import { __awaiter } from "tslib";
import { TestBed } from '@angular/core/testing';
import { CheckPointDialogComponent } from './check-point-dialog.component';
describe('CheckPointDialogComponent', () => {
    let component;
    let fixture;
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield TestBed.configureTestingModule({
            declarations: [CheckPointDialogComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(CheckPointDialogComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=check-point-dialog.component.spec.js.map