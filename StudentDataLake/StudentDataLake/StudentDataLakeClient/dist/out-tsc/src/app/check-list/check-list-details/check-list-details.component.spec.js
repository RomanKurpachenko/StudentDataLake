import { __awaiter } from "tslib";
import { TestBed } from '@angular/core/testing';
import { CheckListDetailsComponent } from './check-list-details.component';
describe('CheckListDetailsComponent', () => {
    let component;
    let fixture;
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield TestBed.configureTestingModule({
            declarations: [CheckListDetailsComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(CheckListDetailsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=check-list-details.component.spec.js.map