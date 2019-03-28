import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'converter'})
export class ConverterPipe implements PipeTransform{
    transform(value1, value2){
        let value_one = parseInt(value1);
        let value_two = parseInt(value2);
        let result = value_one * value_two;
        return "Multiplication of " + value_one + " * " + value_two + " = " + result;
    }
}
