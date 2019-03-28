import { Component } from "@angular/core";

@Component({
    selector: 'fruit',
    templateUrl: 'fruit.component.html'
})

export class FruitComponent {
    public component_name = 'Fruit Component'
    public fruit_list = 'Apple, bannana'
}