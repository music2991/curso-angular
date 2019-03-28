import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component ({
    selector: 'contact',
    templateUrl: './contact.component.html'
})

export class ContactComponent {
    public title = 'Contact page'
    public parameter;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router
    ){}

    ngOnInit(){
        this._route.params.forEach( (params: Params) => {
            this.parameter = params['page'];
        });
    }

    redirect(){
        this._router.navigate(['/contact', '9821101947']);
    }

    redirectToHome(){
        this._router.navigate(['/home']);
    }
}