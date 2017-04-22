'use strict';
 let main_class= function Complex(real, imaginary){
    this.real = 0;
    this.imaginary = 0;
    this.real = (typeof  real === 'undefined' ? this.real : parseFloat(real));
    this.imaginary = (typeof imaginary === 0 ? this.imaginary  : parseFloat(imaginary));

};


main_class.prototype.transform = function(num){
    let complex;
    complex = (num instanceof main_class ? num : complex);
    complex = (typeof num === 'number' ? new main_class(num, 0) : num);
    return complex;
};


let display = function display_function(re, im){
   
    if(im === 0) {
        return '' + re;
    }
    else if(re === 0 && im === 1) {
        return  '' + 'i';
    }
    else if(im === -1 && re === 0) {
        return '' + ' -i';
    }
    else if(re > 0 && im === -1) {
        return '' + re + ' -i';
    }
    else if(re < 0 && im === -1){
        return '' + re + ' -i';
    }
    else if(re === 0){
        return  '' + im + 'i';
    }
    else if(im < 0){
        return '' + re + im + 'i';
    }
    else if(im === 1){
        return '' + re + ' +' + ' i';
    }
    else if(im === -1){
        return '' + re + ' -i';
    }
    else{
    return '' + re + ' + ' + im + 'i';
    }
    return "invalid input";

};


let add = function addition(first, second){
    let num1, num2;
    num1 = main_class.prototype.transform(first);
    num2 = main_class.prototype.transform(second);
    let rl = num1.real + num2.real;
    let img = num1.imaginary + num2.imaginary;
    return display(rl, img);
};


let subtract = function subtraction(first, second){
    let num1, num2;
    num1 = main_class.prototype.transform(first);
    num2 = main_class.prototype.transform(second);
    let rl = num1.real - num2.real;
    let img = num1.imaginary - num2.imaginary;
    return display(rl, img);
};


let multiply = function multiplication(first, second){
    let num1, num2;
    num1 = main_class.prototype.transform(first);
    num2 = main_class.prototype.transform(second);
    let rl = ((num1.real * num2.real) - (num1.imaginary * num2.imaginary));
    let img = ((num1.real * num2.imaginary) + (num2.real * num1.imaginary));
    return display(rl, img);
};


let divide = function division(first, second){
    let num1, num2, rl, img, divisor;
    num1 = main_class.prototype.transform(first);
    num2 = main_class.prototype.transform(second);
    divisor = (Math.pow(num2.real, 2) + Math.pow(num2.imaginary, 2));
    rl = (((num1.real * num2.real) + (num1.imaginary * num2.imaginary)) / divisor);
    img = ((-(num1.real * num2.imaginary) + (num1.imaginary * num2.real)) / divisor);
    return display(rl, img);
};


let conjugate = function conjugation(complex){
    let num, rl, img;
    num = main_class.prototype.transform(complex);
    rl  = num.real;
    img = -(num.imaginary);
    return display(rl, img);

};

module.exports = {
    main_class,
    add,
    subtract,
    display,
    divide,
    conjugate,
    multiply
}
