import { Component } from '@angular/core';
import { ClothingService } from '../services/clothing.service';

@Component ({
    selector: 'home',
    templateUrl: './home.component.html',
    providers: [ClothingService]
})

export class HomeComponent {
    public title = 'Home page';
    public clothingList: Array<string>;
    public clothingToSave:string;

    // For pipes:
    public date;

    constructor(
        private _clothingService:ClothingService
    ){
        this.date = new Date(2019, 0, 19) // The months became with the 0 index
    }

    ngOnInit(){
        console.log(this._clothingService.test());
        this.clothingList = this._clothingService.getAllClothings();
    }

    saveNewClothing(){
        let result = this._clothingService.addClothing(this.clothingToSave);
        console.log(result);
        this.clothingToSave = null;
    }

    deleteClothing(clothingIndex){
        this._clothingService.deleteClothing(clothingIndex);
    }
}