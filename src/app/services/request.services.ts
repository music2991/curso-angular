import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
//import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators'; // use: .pipe(map(res => res.json()));
import { Observable } from 'rxjs/Observable'

@Injectable()
export class RequestService{
    public url: string;

    constructor(
        private _http: HttpClient
    ){
        this.url = 'https://jsonplaceholder.typicode.com/posts';
    }

    makeTest(){
        return 'Hello world from new service!!!!';
    }

    getArticles(){
        return this._http.get(this.url).pipe(map(res => res));
        //return this._http.get(this.url).pipe(map(res => JSON.stringify(res)));//is ok
        //return this._http.get(this.url).pipe(map(res => res.json()));
        //return this._http.get(this.url).map(res => res.json());
    }
}