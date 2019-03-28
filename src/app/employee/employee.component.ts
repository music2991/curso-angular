import { Component } from '@angular/core';
import { Employee } from './employee';

@Component({
    selector: 'employee',
    templateUrl: './employee.component.html',
    styleUrls: ['./employee.component.css']
})

export class EmployeeComponent{
    public title:string = 'Employee Component';
    public name:string;
    public year = 26;
    public isMan:boolean = true; 
    public address = 'Volcan Quinceo';
    public city = 'Guadalajara';
    private varPrivate = 'I\'m privated';
    public jobs:Array<string> = ['Yonusa', 'Kleverness', 'Ivedha'];
    public employeeConfig:Array<any> = ['volumen', 23, true];
    public wildcard:any = false;
    // using directives:
    public externalWorker:boolean;
    public color:string = 'blue';

    // using models:
    public employeeEmbedded:Employee;
    public workers:Array<Employee>;

    //two-way data binding:
    public selectedColor:string;

    // it's launched first: initialize properties.
    constructor(){
        this.name = 'Fco Puc';
        this.externalWorker = true;
        this.selectedColor = '#ccc';
    }

    // it's lauched after the constructor, put here functions, services calls or the rest 
    // of the required configs or tasks
    ngOnInit(){
        // using models
        this.employeeEmbedded = new Employee('Brett Wright', 23);
        console.log("Embedded employed:");
        console.log(this.employeeEmbedded);

        this.workers = [
            new Employee('Louise Soto', 44),
            new Employee('Everett Clark', 48),
            new Employee('Keith Morrison', 31)
        ];
        console.log(this.workers);

        console.log('Name:' + this.name);
        this.printAddress();

        // vars and it scopes:
        var var1 = 8;
        var var2 = 15;
        if (var1 === 8){
            let var1 = 16;
            var var2 = 24;
            console.log('*** Dentro de if var1=' + var1 + ' & var2=' + var2);
        }
        console.log('*** Fuera de if var1=' + var1 + ' & var2=' + var2)
    }

    printAddress(){
        console.log('Address:' + this.address);
    }

    updateExternalWorker(value){
        this.externalWorker = value;
    }
}