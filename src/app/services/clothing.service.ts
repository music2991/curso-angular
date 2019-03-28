import { Injectable } from '@angular/core';

@Injectable()
export class ClothingService {
    public garmentName = 'pants';
    public ClothingCollection = ['White pants', 'Red T-Shirt'];

    test(){
        return this.garmentName;
    }

    addClothing(newClothing:string):Array<string>{
        this.ClothingCollection.push(newClothing);
        return this.getAllClothings();
    }

    getAllClothings(){
        return this.ClothingCollection;
    }

    deleteClothing(index:number){
        this.ClothingCollection.splice(index, 1);
        return this.getAllClothings();
    }
}