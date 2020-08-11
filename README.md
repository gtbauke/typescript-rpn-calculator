# Simple Command Line Calculator

This calculator supports basic arithimetic expressions, such as Addition,
Subtraction, Multiplication and Division.

## How to run it?
Running this calculator is simple. After cloning the repository and building the typescript project, run the following command:

```bash
node pathToTheJsFile "yourMathExpression"
```

## How it works?

The input infix notation string is fisrt converted in an array of tokens, then they are parsed and converted to an array of tokens in postfix notation, also known as **Reverse Polish Notation**. Example:

Infix Notation:
```
a + b * (c - d)
```

Postfix Notation:
```
abcd-*+
```

After the conversion, the postfix notation array is interpreted using a stack, outputing the result to the console.

## Why Infix to Postfix?

Infix notation does not present all the data that is needed for a operation to take place at once. The computer must look ahead in the stream of tokens and find the values of the binaty operator.

On the other hand, postfix notation gives all the information you need before the operation. Using a stack it is possible to evaluate such expressions and calculate a result.
