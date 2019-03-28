import { Component } from '@angular/core';

@Component({
    selector: 'NoF',
    template: '<h2>{{title}}</h2>'
})

export class NotFoundComponent{
    public title: string = "Not found page";
}