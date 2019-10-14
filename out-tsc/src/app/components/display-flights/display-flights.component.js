import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let DisplayFlightsComponent = class DisplayFlightsComponent {
    constructor(service, router) {
        this.service = service;
        this.router = router;
    }
    ngOnInit() {
        this.data = this.service.flightData;
        console.log(this.data);
    }
    onSelect(id) {
        this.router.navigate(['/passengerDetails/' + id]);
    }
};
DisplayFlightsComponent = tslib_1.__decorate([
    Component({
        selector: 'app-display-flights',
        templateUrl: './display-flights.component.html',
        styleUrls: ['./display-flights.component.css']
    })
], DisplayFlightsComponent);
export { DisplayFlightsComponent };
//# sourceMappingURL=display-flights.component.js.map