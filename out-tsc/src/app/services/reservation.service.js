import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
let ReservationService = class ReservationService {
    constructor(http) {
        this.http = http;
        this.flightUrl = "http://localhost:8080/flightservices/flights";
        this.reservationUrl = "http://localhost:8080/flightservices/reservations";
    }
    getFlights(from, to, departureDate) {
        return this.http.get(this.flightUrl + "?from=" + from + "&to=" + to + "&departureDate=" + departureDate).pipe(map(res => {
            this.flightData = res;
        }, err => {
            console.error(err);
        }));
    }
    getFlight(id) {
        return this.http.get(this.flightUrl + "/" + id).pipe(map(res => { return res; }, err => {
            console.error(err);
        }));
    }
    saveReservation(reservation) {
        return this.http.post(this.reservationUrl, reservation).pipe(map(res => {
            return res;
        }, err => {
            console.error(err);
        }));
    }
};
ReservationService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], ReservationService);
export { ReservationService };
//# sourceMappingURL=reservation.service.js.map