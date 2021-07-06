import { __awaiter } from "tslib";
import { TestBed } from '@angular/core/testing';
import { CheckPointComponent } from './check-point.component';
describe('CheckPointComponent', () => {
    let component;
    let fixture;
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield TestBed.configureTestingModule({
            declarations: [CheckPointComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(CheckPointComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=check-point.component.spec.js.map