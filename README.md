![ga logo](https://camo.githubusercontent.com/6ce15b81c1f06d716d753a61f5db22375fa684da/68747470733a2f2f67612d646173682e73332e616d617a6f6e6177732e636f6d2f70726f64756374696f6e2f6173736574732f6c6f676f2d39663838616536633963333837313639306533333238306663663535376633332e706e67)

# Functions Lab

Course: SEI <br>
Created by: GA Instructional Staff <br>
Competencies: Arrow functions, researching with MDN, careful reading of instructions 

## Setup

Create a new GitHub repo named "Functions Lab". For each function, create a separate JavaScript file, numbered 1 to 7 (e.g. `1.js` and `2.js`).

Be sure to do a commit after finishing each problem and push at least once when you are finished. Share a link to your repo in the appropriate Slack thread.

## But First, Some Advice...

### Break it down!

Don't try to do everything at once!  Break things down into absurdly basic steps.  Remember you're much much smarter than a computer and you have to think on a very low level like a computer to be effective at giving instructions to that computer.

### Semantics

In this lab we mostly tell you what to name your functions (and when explicitly told a name, you should use it), but in general it will be up to you. Think carefully about what you're naming your functions. Function names should read like English verbs. A function that adds numbers should be called `addNumbers`.  A function that figures out which user is currently logged in should be called `getLoggedInUser`.  If a function is called `check` something, then it is probably seeing if a certain situation is true or not, so it should probably return a Boolean value.  Someone else using your code should be able to make a pretty educated guess what your functions do (and what data your variables contain) just by how they're named.


## The Problems

### 1. `sayHello`
Write a function called `sayHello` with a parameter `name` that logs a greeting to the console with the passed-in name. 
```javascript
sayHello("Tyler")   // Logs "Hello, Tyler!"
```

### 2. `reverseString`
Write a function, `reverseString`, that accepts a single argument, a string. The function should return a string with the order of the characters reversed.
```javascript
reverseString("Hello, world!")  // logs !dlrow ,olleH
```

### 3. `calculate`
Write a function called `calculate`.

This function should take three arguments: two numbers and a string.

Name the parameters `x`, `y`, and `operation`.

  - If `operation` is equal to `"add"` it should return the sum of `x` and `y`.
  - If `operation` is `"subtract"` it should return return `x` minus `y`.
  - Do the same thing for multiplication, `"multiply"`, and division, `"divide"`.
  - Bonus: handle when `operation` is an unrecognized value.

```javascript
calculate(4, 3, "subtract")  // Logs "1"
```

### 4. Pandigital Numbers
> Note: The following question is weird, we know. In interviews, you will absolutely be given coding challenges with "weird" questions and you'll need to be very careful when reading these types of questions to make sure you understand what you're being asked to do.

A number of length n is *1-to-n pandigital* if it makes use of all the digits 1 to n exactly once.

- The number `15234` is *1-to-n pandigital* because it is 5 numbers long and includes 1, 2, 3, 4, and 5.
- The number `333` is **not** *1-to-n pandigital*.
- The number `0` is **not** *1-to-n pandigital*.
- The number `987654321` is *1-to-n pandigital*.

Write a function that checks if a number is _1-to-n pandigital_.

### 5. Functions + loops: a special partnership 
Write a function that, when called ("call" = "invoke") creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space (a "white square") or a `#` character (representing a black square). Hence, the characters should form a chessboard.

Calling your function should print something like this:

```
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # #
```

### 6. Modify it to make any size grid.
When you have a function that generates this pattern, modify it to take a parameter `size`.  Make the function work for any size, outputting a properly formatted grid of the given width and height.  If it helps you to have this set. The very first square should always be white.

Remember to give it a nice **semantic** name

> This problem was adapted from one in [Eloquent Javascript](http://eloquentjavascript.net/02_program_structure.html#p_1pkxSCSkVg). 

### 7. Variable number of arguments
Modify `calculate` above so that it continues to work as specified in question 3, but also lets a user get the square root of a number by specifying only 2 parameters: the number they want the square root of as the first parameter, and "sqrt" as the second parameter.

Click "Details" below for a hint:

<details>
Hint: use `typeof` 
</details>
