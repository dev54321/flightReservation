import { TestBed } from '@angular/core/testing';
import { ReservationService } from './reservation.service';
describe('ReservationService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));
    it('should be created', () => {
        const service = TestBed.get(ReservationService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=reservation.service.spec.js.map