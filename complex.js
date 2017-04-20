(function(){
    'use strict'
    module.exports = Complex;


 function Complex(real, imaginary){
    this.real = 0;
    this.imaginary = 0;
    this.real = (typeof  real=== 'undefined' ? this.real : parseFloat(real));
    this.imaginary = (typeof imaginary === 'undefined'? this.real : parseFloat(imaginary));

}


Complex.transform = function(num){
    var complex;
    complex = (num instanceof Complex ? num : complex);
    complex = (typeof num === 'number' ? new Complex(num, 0) : num);
    return complex;
};


Complex.display_function = function(re, im){
    if(im === '0') return '' + re;
    if(re === 0) return im + 'i';
    if(im < 0) return '' + re + im + 'i';
    if(im === 1) return '' + re + 'i';
    if(im === -1) return '' + re + '-1'
    return '' + re + '+' + im + 'i';

}


Complex.add = function(first, second){
    var num1, num2;
    num1 = Complex.transform(first);
    num2 = Complex.transform(second);
    var rl = num1.real + num2.real;
    var img = num1.imaginary + num1.imaginary;
    return display_function(rl, img);
}


Complex.subtract = function(first, second){
    var num1, num2;
    num1 = Complex.transform(first);
    num2 = Complex.transform(second);
    var rl = num1.real - num2.real;
    var img = num1.imaginary - num2.imaginary;
    return display_function(rl, img);
}


Complex.multiply = function(first, second){
    var num1, num2;
    num1 = Complex.transform(first);
    num2 = Complex.transform(second);
    var rl = ((num1.real * num2.real) - (num1.imaginary * num2.imaginary));
    var img = ((num1.real * num2.imaginary) + (num2.real * num1.imaginary));
    return display_function(rl, img);
}


Complex.divide = function(first, second){
    var num1, num2, rl, img, divisor;
    num1 = Complex.transform(first);
    num2 = Complex.transform(second);
    divisor = (Math.pow(num2.real, 2) + Math.pow(num2.imaginary, 2));
    rl = (((num1.real * num2.real) + (num1.imaginary * num2.imaginary)) / divisor);
    img = ((-(num1.real * num2.imaginary) + (num1.imaginary * num2.real)) / divisor);
    return display_function(rl, img);
}


Complex.conjugate = function(complex){
    var num, rl, img;
    num = Complex.transform(complex);
    rl  = num.real;
    img = -(num.imaginary);
    return display_function(rl, img);

}
})();
