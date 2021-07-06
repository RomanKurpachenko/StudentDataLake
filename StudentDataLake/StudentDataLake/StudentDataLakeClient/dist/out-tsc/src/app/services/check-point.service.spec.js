import { TestBed } from '@angular/core/testing';
import { CheckPointService } from './check-point.service';
describe('CheckPointService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(CheckPointService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=check-point.service.spec.js.map