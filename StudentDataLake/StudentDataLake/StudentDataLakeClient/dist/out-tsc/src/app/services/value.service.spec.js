import { TestBed } from '@angular/core/testing';
import { ValueService } from './value.service';
describe('ValueService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(ValueService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=value.service.spec.js.map