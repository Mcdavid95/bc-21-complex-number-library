(function(){
    'use strict';


    let mainApp = require('./complex'),
        figlet = require('figlet'),
        clear = require('clear'),//Clears console window//
        chalk = require('chalk'),//For styling CLI//
        readInput = require('readline-sync');// for taking user input//

clear(); //Clears console//
console.log(chalk.white.bold(figlet.textSync('complex',{font:'Banner', horizontalLayout: 'full'})));
console.log(chalk.white.bgMagenta.bold("A console app that performs basic arithmetic operation on complex numbers."));
console.log(chalk.magenta.bold("\n Please read the instructions and chose an option below.\n"));

//Get User choice//
let getUserChoice = function(){

    /*Display Menu*/
    console.log(chalk.red.bold("Type 1 : To Add complex numbers.\n"));
    console.log(chalk.red.bold("Type 2 : To Subtract complex numbers.\n"));
    console.log(chalk.red.bold("Type 3 : To Multiply complex numbers.\n"));
    console.log(chalk.red.bold("Type 4 : To Divide two complex numbers.\n"));
    console.log(chalk.red.bold("Type 5 : To Get conjugate of a complex number.\n"));
    console.log(chalk.red.bold("Type 0 : To Exit the console app.\n"));
    
    let userChoice = readInput.question(chalk.green.bold("Your input: "));
    return userChoice;
};

/*Assesses User's choice*/
let assessUserChoice = function(input){

    while(Math.abs(input) >= 0 && Math.abs(input) < 6){

        let mainResult, complexNumArray;

        /*Perform Operations based on User's choice*/
        switch(input){

            case "1":
                    console.log(chalk.yellow.bold("\n Your choice: 1... Addition of complex numbers"));
                    complexNumArray = getComplex();
                    mainResult = mainApp.add(complexNumArray[0], complexNumArray[1]);
                    console.log(chalk.yellow.bold("Addition of complex numbers " + complexNumArray[0] + " and " + complexNumArray[1] + " is " + mainResult + "\n"));
                    break;

            case "2":
                    console.log(chalk.yellow.bold("\n Your choice: 2... Subtraction of complex numbers"));
                    complexNumArray = getComplex();
                    mainResult = mainApp.subtract(complexNumArray[0], complexNumArray[1]);
                    console.log(chalk.yellow.bold("Complex number " + complexNumArray[0] + " minus complex number " + complexNumArray[1] + " gives " + mainResult + "\n"));
                    break;

            case "3":
                    console.log(chalk.yellow.bold("\n Your choice: 3... Multiplication of complex numbers"));
                    complexNumArray = getComplex();
                    mainResult = mainApp.multiply(complexNumArray[0], complexNumArray[1]);
                    console.log(chalk.yellow.bold("Complex number " + complexNumArray[0] + " multiply complex number " + complexNumArray[1] + " is " + mainResult + "\n"));
                    break;

            case "4":
                    console.log(chalk.yellow.bold("\n Your choice: 4... Division of complex numbers"));
                    complexNumArray = getComplex();
                    mainResult = mainApp.divide(complexNumArray[0], complexNumArray[1]);;
                    console.log(chalk.yellow.bold("Complex number " + complexNumArray[0] + " divided by complex " + complexNumArray[1] + " is " + mainResult + "\n"));
                    break; 

            case "5":
                    console.log(chalk.yellow.bold("\n Your choice: 5... Conjugate of a complex number"));
                    complexNumArray = getSingleComplex();
                    mainResult = mainApp.conjugate(complexNumArray);
                    console.log(chalk.yellow.bold("Conjugate of complex number = " + mainResult + "\n"));
                    break;
            case "0":
                    console.log(chalk.red.bold("Thanks for using this app, Good-bye!!\n"));
                    var exitCode = 1;
                    process.exit(exitCode);
                    break;

                    default:
                           console.log(chalk.magenta("Your input must be a number between 0 and 5."));
                    break;       

                 }
          break;
         }
         return assessUserChoice(getUserChoice());
    };

    //Get's complex number inputs from user//
    let getComplex = function(){

        console.log(chalk.cyan("Please input real and imaginary parts of each complex number without the `i`\n"));
        let firstReal = readInput.question(chalk.white.bold("Enter the real part of first complex number: \n")),
            firstImaginary = readInput.question(chalk.white.bold("Enter the imaginary part of the first complex number: \n")),
            secondReal = readInput.question(chalk.white.bold("Enter real part of second complex number: \n")),
            secondImaginary = readInput.question(chalk.white.bold("Enter imaginary part of second complex number: \n")),
        firstComplex = (typeof firstReal === 'undefined') ? new mainApp.Complex(0, firstImaginary):
                          (typeof firstImaginary === 'undefined') ? new mainApp.Complex(firstReal, 0): new mainApp.Complex(firstReal, firstImaginary),
        secondComplex = (typeof secondReal ===  'undefined') ? new mainApp.Complex(0, secondImaginary):
                          (typeof secondImaginary === 'undefined') ? new mainApp.Complex(secondReal, 0): new mainApp.Complex(secondReal, secondImaginary);
                          return [firstComplex, secondComplex];
    }

      let getSingleComplex = function(){

          console.log(chalk.cyan.bold("Please input real and imaginary part for the complex number without the `i`\n"));
          let real = readInput.question(chalk.white.bold("Enter real part of complex number: \n")),
              imaginary = readInput.question(chalk.white.bold("Enter imaginary part of complex number: \n"));
              let singleComplexNum = new mainApp.Complex(real, imaginary);
              return [singleComplexNum];

          
      };
      assessUserChoice(getUserChoice()); 
})();