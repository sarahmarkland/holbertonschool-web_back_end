Readme for ES6_basic

## What ES6 is:

ES6, short for ECMAScript 2015, is a significant update to the JavaScript programming language. It was officially ratified by the Ecma International standards organization in 2015 and introduced several new features and enhancements to JavaScript. ES6 brought about major improvements to the language's syntax and functionality, making it more powerful and easier to work with for developers. Some of the key features and enhancements introduced in ES6 include:

## New features introduced in ES6

let and const: ES6 introduced two new ways to declare variables, let and const, which provide better scoping rules than the previously used var. let allows for block-scoped variables, and const declares constants that cannot be reassigned after they are defined.

Arrow Functions: Arrow functions provide a more concise syntax for writing anonymous functions in JavaScript, making code shorter and often easier to read.

Template Literals: Template literals allow for easy string interpolation and multiline strings, using backticks (`) instead of single or double quotes.

Enhanced Object Literals: ES6 introduced shorthand syntax for defining object properties and methods inside object literals, as well as computed property names.

Classes: ES6 introduced a more structured and object-oriented class syntax, making it easier to define and work with classes in JavaScript.

Modules: ES6 introduced a standardized module system for JavaScript, allowing developers to create reusable code and manage dependencies more effectively.

## The difference between a constant and a variable

Constants and variables are both used in programming to store and manage data, but they have some key differences in terms of their behavior and usage:

Mutability:

Constants: Constants, as the name suggests, are values that cannot be changed or reassigned after they are initially defined. Once a value is assigned to a constant, it remains the same throughout the program's execution.
Variables: Variables can be changed or reassigned with different values at any point in the program. They are mutable, meaning their contents can be modified during the program's execution.
Declaration:

Constants: Constants are typically declared using the const keyword in many programming languages, including JavaScript and Java. This keyword indicates that the value should not be altered.
Variables: Variables are declared using keywords like var, let, or var in JavaScript, and int, float, or other data type-specific keywords in other languages.
Scope:

Constants: Constants can have different scopes, depending on the programming language. In some languages, they may have block-level scope, while in others, they could have global scope. It depends on the language's rules and the specific context of their declaration.
Variables: Variables can have various scopes as well, which can include function-level scope, block-level scope, or global scope, depending on how they are declared.
Usage:

Constants: Constants are typically used for values that should remain constant throughout the program's execution, such as mathematical constants (e.g., π or e), configuration settings, or values that should not be accidentally changed.
Variables: Variables are used for storing data that can change or be updated as the program runs, such as user input, intermediate calculations, or values that need to be modified over time.

## Block-scoped variables

Block-scoped variables are variables in a programming language that have a scope limited to the block of code in which they are declared. In other words, their visibility and accessibility are confined to the specific code block (usually enclosed within curly braces {}), such as a function, loop, or conditional statement, where they are defined. This concept is often associated with languages that support block-level scoping, like JavaScript with the let and const keywords introduced in ECMAScript 2015 (ES6).

## Arrow functions and function parameters default to them
## Rest and spread function parameters
## String templating in ES6
## Object creation and their properties in ES6
## Iterators and for-of loops
