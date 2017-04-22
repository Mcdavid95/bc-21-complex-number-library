'use strict';
var myApp = require('./complex');
var jasmine = require('jasmine')

describe("Solve complex numbers", function(){

    describe("Cases for addition of complex numbers", function(){

        it("should return `(5 + 7i)` for (2 + 3i) + (3 + 4i)", function(){
            let arg1 = new myApp.main_class(2, 3),
                arg2 = new myApp.main_class(3, 4);
            expect(myApp.add(arg1, arg2)).toBe('5 + 7i')

        });

        it("should expect `(5 + 8i)` for (3 + 2i) + (2 + 6i)", function(){
            let arg1 = new myApp.main_class(3, 2),
                arg2 = new myApp.main_class(2, 6);
            expect(myApp.add(arg1, arg2)).toBe('5 + 8i')
        });

        it("should return `(5-2i)` for (3 + 2i) + (2 - 4i)", function(){
            let arg1 = new myApp.main_class(3, 2),
                arg2 = new myApp.main_class(2, -4);
            expect(myApp.add(arg1, arg2)).toBe('5-2i')
        });

    });


    describe("Case for subtraction of complex numbers", function(){

        it("should return `(4 + 2i)` for (10 + 4i) - (6 + 2i)", function(){
            let arg1 = new myApp.main_class(10, 4),
                arg2 = new myApp.main_class(6, 2);
            expect(myApp.subtract(arg1, arg2)).toBe('4 + 2i')    
        });

        it("should return `(4-10i)` for (6 - 4i) - (2 + 6i)", function(){
            let arg1 = new myApp.main_class(6, -4),
                arg2 = new myApp.main_class(2, 6);
            expect(myApp.subtract(arg1, arg2)).toBe('4-10i')    
        });

        it("should return `(1)` for (4 - 2i) - (3 - 2i)", function(){
            let arg1 = new myApp.main_class(4, -2),
                arg2 = new myApp.main_class(3, -2);
            expect(myApp.subtract(arg1, arg2)).toBe('1')    
        });                                                       
    });




    describe("Case for multiplication of complex numbers", function(){

        it("should return `(6 + 42i)` for (9 + 3i) * (2 + 4i)", function(){
            let arg1 = new myApp.main_class(9, 3),
                arg2 = new myApp.main_class(2, 4);
            expect(myApp.multiply(arg1, arg2)).toBe('6 + 42i')    
        });

        it("should return `(38-16i)` for (6 + 7i) * (4 - 2i)", function(){
            let arg1 = new myApp.main_class(6, 7),
                arg2 = new myApp.main_class(4, -2);
            expect(myApp.multiply(arg1, arg2)).toBe('38 + 16i')    
        });

        it("should return `(60-480i)` for (20, 10) * (12, 18)", function(){
            let arg1 = new myApp.main_class(20, -10),
                arg2 = new myApp.main_class(12, -18);
        });
    });



    describe("Case for division of complex numbers", function(){
        it("should return `(-0.3 + 1.4i)` for (5 + 4i) / (2 - 4i)", function(){
				let arg1 =	new myApp.main_class(5, 4),
					arg2 =	new myApp.main_class(2, -4);
        expect(myApp.divide(arg1, arg2)).toBe('-0.3 + 1.4i')
    });
    
});


       describe("Case for conjugate of complex numbers", function(){

			it("should return `(3-2i)` for conjugate of (3 + 2i)", function(){
				let args = new myApp.main_class(3, 2);
				expect(myApp.conjugate(args)).toBe('3-2i');
			});

            it("should return `(19 + 12i)` for conjugate of (19 - 12i)", function(){
                let args = new myApp.main_class(19, -12);
                expect(myApp.conjugate(args)).toBe('19 + 12i');
            });
			
       });

        
        });

		describe("Case for zero real or zero imaginary", function(){

			it("should return `(1)` for (1 + 0i)", function(){
			let args = new myApp.main_class(1, 0);
				expect(myApp.display_function(1, 0)).toBe('1');
			});

			it("should return `(i)` for (0 + i)", function(){
				let args = new myApp.main_class(0, 1);
				expect(myApp.display_function(0, 1)).toBe('i');
			});

			it("should return `(i)` for (0 - i)", function(){
				let args = new myApp.main_class(0, -1).toString();
				expect(myApp.display_function(0, -1)).toBe(' -i');
			});
});
       
