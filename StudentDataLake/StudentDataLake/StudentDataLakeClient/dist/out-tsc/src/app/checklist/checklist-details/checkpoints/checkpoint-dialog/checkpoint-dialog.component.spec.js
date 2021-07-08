import { __awaiter } from "tslib";
import { TestBed } from '@angular/core/testing';
import { CheckpointDialogComponent } from './checkpoint-dialog.component';
describe('CheckpointDialogComponent', () => {
    let component;
    let fixture;
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield TestBed.configureTestingModule({
            declarations: [CheckpointDialogComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(CheckpointDialogComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=checkpoint-dialog.component.spec.js.map