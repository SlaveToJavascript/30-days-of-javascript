// https://leetcode.com/problems/create-hello-world-function/description/?envType=study-plan-v2&envId=30-days-of-javascript
// EASY

// Write a function createHelloWorld
// It should return a new function that always returns "Hello World"

// EXAMPLES:
    // Input: args = []
    // Output: "Hello World"
    // Explanation:
    // const f = createHelloWorld();
    // f(); // "Hello World"
    // The function returned by createHelloWorld should always return "Hello World".

    // Input: args = [{},null,42]
    // Output: "Hello World"
    // Explanation:
    // const f = createHelloWorld();
    // f({}, null, 42); // "Hello World"
    // Any arguments could be passed to the function but it should still always return "Hello World".

// SOLUTION 1: Function Syntax
    var createHelloWorld = function() {
        return function() {
            return "Hello World";
        }
    };

// SOLUTION 2: Arrow Syntax
    var createHelloWorld = function() {
        return () => "Hello World";
    };

// SOLUTION 3: Arrow Syntax + Rest Arguments
    var createHelloWorld = function() {
        return (...args) => "Hello World";
    };

//#########################################################################################################

// FUNCTION DECLARATION SYNTAX
// 2 main ways to declare functions in JavaScript: function syntax and arrow syntax

    // 1. Basic syntax
        function func(a, b) {
            const sum = a + b;
            return sum
        }
        console.log(f(3, 4)); // 7

    // 2. Anonymous function
        // You can optionally exclude the name of the function after the function keyword
        var f = function(a, b) {
            const sum = a + b;
            return sum;
        }
        console.log(f(3, 4)); // 7
    
    // 3. Arrow syntax (preferred)
        const f = (a, b) => {
            const sum = a + b;
            return sum;
        };
        console.log(f(3, 4)); // 7
        // You are allowed to return nothing, and it will instead implicitly return undefined

        // Omit return: If you can write the code in a single line, you can omit the return keyword
        const f = (a, b) => a + b;
        console.log(f(3, 4)); // 7

    // 4. Rest Arguments
        // You can use rest syntax to access all the passed arguments as an array
        function f(...args) {
            const sum = args[0] + args[1];
            return sum;
        }
        console.log(f(3, 4)); // 7
        // In this example the variable args is [3, 4]
    
// FUNCTION DECLARATION FEATURES
    // 1. Immediately Invoked Function Expression (IIFE)
        // You can create a function and immediately execute it in JavaScript
        // This is useful for creating a function that is only executed once
        const result = (function(a, b) {
            const sum = a + b;
            return sum;
        })(3, 4);
        console.log(result); // 7
        // Why would you write code like this?
            // It gives you the opportunity to encapsulate a variable within a new scope
            // e.g. another developer can immediately see that sum can't be used anywhere outside the function body
        
    // 2. Functions Within Functions
        function createFunction() {
            function f(a, b) {
                const sum = a + b;
                return sum;
            }
            return f;
        }
        const f = createFunction();
        console.log(f(3, 4)); // 7
        // In this example, createFunction() returns a new function
            // Then that function can be used as normal

    // 3. Function Hoisting
        // hoisting = a function can be used before it is initialized
            // You can only do this if you declare functions with the function syntax
        function createFunction() {
            return f;
            function f(a, b) {
                const sum = a + b;
                return sum;
            }
        }
        const f = createFunction();
        console.log(f(3, 4)); // 7
        // the function f() is returned before it is initialized
        // Although it is valid syntax, it is sometimes considered bad practice as it can reduce readability