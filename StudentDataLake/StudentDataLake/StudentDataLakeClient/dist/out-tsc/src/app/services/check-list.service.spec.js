import { TestBed } from '@angular/core/testing';
import { CheckListService } from './check-list.service';
describe('CheckListService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(CheckListService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=check-list.service.spec.js.map