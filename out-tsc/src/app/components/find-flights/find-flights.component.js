import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let FindFlightsComponent = class FindFlightsComponent {
    constructor(service, router) {
        this.service = service;
        this.router = router;
    }
    ngOnInit() {
    }
    onSubmit(data) {
        this.service.getFlights(data.from, data.to, data.departureDate).subscribe(res => {
            this.router.navigate(['/displayFlights']);
        });
    }
};
FindFlightsComponent = tslib_1.__decorate([
    Component({
        selector: 'app-find-flights',
        templateUrl: './find-flights.component.html',
        styleUrls: ['./find-flights.component.css']
    })
], FindFlightsComponent);
export { FindFlightsComponent };
//# sourceMappingURL=find-flights.component.js.map