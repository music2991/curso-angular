import { Component } from '@angular/core';

@Component({
    selector: 'my_template',
    templateUrl: './my_template.component.html',
})

export class MyTemplateComponent{
    public title = 'Angulat ngTemplate';
    public admin;

    constructor(){
        this.title = "ngTemplate in Angular!!!"
        this.admin =  true;
    }

    updateAdminState(value){
        this.admin = value
    }
}