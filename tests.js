// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});








// Step 1: Write the smallest possible test: Identify the simplest, smallest thing you want to confirm.
//      For example, before a function exists, assert that the function is defined.
//     Step 2: Run all the tests to ensure that the new test fails. We're supposed to see a red, failing test, since there's no code yet to green it. Red means we did the first step correctly. Seeing the newest test turn red is critical because our tests drive the development, not the other way around.
//     Step 3: Write only enough code to green that newest test. No more, no less. It's OK if things are hard-coded here.
// Step 4: Run all tests. We're looking for green tests across the board.
// Step 5: Refactor the code.
//     Step 6: Repeat the process by going back to Step 1. The repeat step means following the steps to add new tests.
// Overview: This entire TDD workflow is often explained as the repetition of "Red, Green, Refactor".
// This encapsulates the idea of writing a single, small failing test, writing only enough code to green the test, and then to refactor, when possible.


// Write a test for a function name 'sayHello'.

describe('sayHello', function() {
    it('should be defined as a function', function(){
        expect(typeof sayHello).toBe('function');
    })
    it('should never return \'undefined\'', function(){
        expect(typeof sayHello()).not.toBe('undefined');
    })
    it('should return a string', function(){
        expect(typeof sayHello()).toBe('string');
    })
    it('should return a greeting for the input', function () {
        expect(sayHello('Jonathan')).toBe('Hello, Jonathan!');
        expect(sayHello('Jay')).toBe('Hello, Jay!');
    });

})

/**
Exercise #10 Let's Test-Drive an isFive function!
        Inside of tests.js, write a describe block for our new isFive function.

        As your first, failing test, write an it and an expect asserting that a function named isFive exists.

        Run the tests by refreshing report.html to show the red, failing test.

        Write just enough code inside of code.js to define an empty function for isFive.
        Now, refresh report.html to ensure that all tests are green.

        What other tests and implementation cycles should you do for isFive?
Ensure that isFive returns a boolean no matter what the input

Ensure that isFive returns true when passed 5
What about if we pass in the string "5"? Do you want isFive to return true for that?
If so, write the test, ensure that the test is failing, and then write the implementation
Commit your work to git and push to GitHub before moving forward.
 */

describe('isFive', function () {
    it('should be a function', function () {
        expect(typeof isFive).toBe('function');
    });
    it('should return a boolean', function () {
        expect(typeof isFive()).toBe('boolean');
    });
    it('should return true when passed 5', function () {
        expect(isFive(5)).toBe(true);
    })
    it('should return true when passed the string\'5\'', function () {
        expect(isFive('5')).toBe(true);
    });
})

/*
Exercise #11 TDD process for testing and creating an isEven function
Start with the smallest tests first. Assert that the function is defined.
    Write just enough code to green the test

Build up functionality one small piece at a time.
    Write each assertion, confirm the test fails,
    write only enough code to green that specific test, refactor, then repeat.
    Remember to add and then "green" one test at a time. That's part of the fundamental approach of TDD.

Assert that isEven:
        returns a boolean no matter the input
        returns true when executed with isEven(2)
        returns true when executed with isEven(-4)
        returns false when executed with isEven(3)
        returns false when called with isEven("banana")
        returns true when called with isEven("8")
        returns false when called with isEven(Infinity)
        return false when called with a boolean input like isEven(true) or isEven(false)
    returns false when called without an argument like isEven()

Refactor when and where you can. Be careful not to refactor before you have a handful of green tests.
    Repeat until the tests are robust and the function works as intended.
    Commit your work to git and push to GitHub before moving forward.
    */
describe ('isEven', function(){
    it('should be a function', function (){
        expect(typeof isEven).toBe('function');
    });
    it('should return a boolean', function () {
        expect(typeof isEven()).toBe('boolean');
    });
    it('should return a true when executed with isEven(2)', function () {
        expect(isEven(2)).toBe(true);
    });
    it('should return a true when executed with isEven(-4)', function () {
        expect(isEven(-4)).toBe(true);
    });
    it('should return a false when executed with isEven(3)', function () {
        expect(isEven(3)).toBe(false);
    });
    it('should return a false when executed with isEven("banana")', function () {
        expect(isEven("banana")).toBe(false);
    });it('should return a true when executed with isEven("8")', function () {
        expect(isEven("8")).toBe(true);
    });
    it('should return a false when executed with isEven(Infinity)', function () {
        expect(isEven(Infinity)).toBe(false);
    });
    it('should return false when called with a boolean input like isEven(true) or isEven(false)', function () {
        expect(isEven(true) || isEven(false)).toBe(false);
    });
    it('should return false when called without an argument like isEven()', function () {
        expect(isEven()).toBe(false);
    });
    it('should return false when parameter is false', function () {
        expect(isEven(false)).toBe(false);
    });

})



    /*
    Exercise #12 Test Drive an isVowel function
Start with the smallest tests first.
    Write just enough code to green the test
Build up functionality one small piece at a time.
    Commit your work to git at each step.
    Write each assertion, confirm the test fails, write only enough code to green that specific test, refactor, then repeat.
    Remember to add and then "green" one test at a time. That's part of the fundamental approach of TDD.
Assert that:
    isVowel always returns a boolean
isVowel("a") returns true
isVowel("A") returns true
isVowel("y") returns false
isVowel(4) returns false
isVowel(true) or isVowel(false) both return false
isVowel("banana") returns false
isVowel() returns false
Refactor when appropriate and possible.
    Repeat until the tests are robust and the function works as intended.
    Commit your work to git and push to GitHub before moving forward.
*/
describe ('isVowel', function(){
    it('should be a function', function (){
        expect(typeof isVowel).toBe('function');
    });
    it('should return a boolean', function () {
        expect(typeof isVowel()).toBe('boolean');
    });
    it('should return true when parameter is "a"', function () {
        expect(isVowel("a")).toBe(true);
    })
    it('should return true when parameter is "A"', function () {
        expect(isVowel("A")).toBe(true);
    })
    it('should return false when parameter is "y"', function () {
        expect(isVowel("y")).toBe(false);
    })
    it('should return false when parameter is 4', function () {
        expect(isVowel(4)).toBe(false);
    })
    it('should return false when parameter is true or false', function () {
        expect(isVowel(true) || isVowel(false)).toBe(false);
    })
    it('should return false when parameter is "banana"', function () {
        expect(isVowel("banana")).toBe(false);
    })
    it('should return false when parameter is empty', function () {
        expect(isVowel()).toBe(false);
    })
})





/*
   Exercise #13 Test Drive an add function
The add function should sum two numbers, as long as each input is a number or a string containing a number.
    Write each assertion, confirm the test fails, write only enough code to green that specific test, refactor, then repeat (move onto the next test.)
Assert that add:
    add(2, 3) returns 5
    add(-3, -9) returns -12
    add("5", 6) returns 11
    add("-4", "10") returns 6
    add("banana", "split") returns NaN
    add(2, "apples") returns NaN
    add() returns NaN

Start with the smallest tests first.
    Write just enough code to green the test
Build up functionality one small piece at a time.
    If any input is not a number, return NaN
Refactor, if possible
    Repeat until the tests are robust and the function works as intended.
    Commit your work to git and push to GitHub.
*/

describe('add', function () {
    it('should be a function', function () {
        expect(typeof add).toBe('function');
    });
    it('should return 5 when add(2,3) ', function () {
        expect(add(2, 3)).toBe(5);
    });
    it('should return -12 when add(-3,-9) ', function () {
        expect(add(-3, -9)).toBe(-12);
    });
    it('should return 11 when add("5", 6)', function () {
        expect(add("5", 6)).toBe(11);
    });
    it('should return 6 when add("-4","10")', function(){
        expect(add("-4","10")).toBe(6);
    })
    it('should return NaN when add("banana", "split")', function () {
        expect(add("banana", "split")).toBeNaN();
    });
    it('should return NaN when add(2, "apples")', function () {
        expect(add(2, "apples")).toBeNaN();
    });
    it('should return NaN when add()', function () {
        expect(add()).toBeNaN();
    });
})
