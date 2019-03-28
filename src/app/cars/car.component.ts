import { Component } from '@angular/core';
import { Car } from './car';
import { RequestService } from '../services/request.services'

@Component({
    selector: 'car',
    templateUrl: './car.component.html',
    providers: [RequestService]
})

export class CarComponent{
    public car: Car;
    public cars: Array<Car>;
    public articles;

    constructor(
        private _requestService: RequestService
    ){
        this.car = new Car('', null, '');
        this.cars = [
            new Car('Seat panda', 2010, 'White'),
            new Car('Renault', 2010, 'Blue'),
        ]

    }

    ngOnInit(){
        console.log(this._requestService.makeTest());
        this._requestService.getArticles().subscribe(
            result => {
                this.articles = result
                if (!this.articles){
                    console.log("Server error");
                }
            },
            error => {
                var errorMsg = <any>error
                console.log(errorMsg)
                console.log(error)
            }
        );
    }

    onSubmit(){
        this.cars.push(this.car);
        this.car = new Car('', null, '');
    }
}