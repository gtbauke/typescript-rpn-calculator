/* eslint-disable no-case-declarations */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Token, TokenType } from './Token';
import { getPrecedence } from './utils/getPrecedence';

export const parse = (tokens: Token[]): Token[] => {
  const operatorStack: Token[] = [];
  const outputStack: Token[] = [];
  let current = 0;

  while (current !== tokens.length - 1) {
    const token = tokens[current];

    switch (token.type) {
      case TokenType.Number:
        outputStack.push(token);
        break;
      case TokenType.Minus:
      case TokenType.Plus:
      case TokenType.Star:
      case TokenType.Slash:
        while (
          operatorStack[operatorStack.length - 1] &&
          getPrecedence(operatorStack[operatorStack.length - 1].type) >=
            getPrecedence(token.type) &&
          operatorStack[operatorStack.length - 1].type !== TokenType.LeftParen
        ) {
          outputStack.push(operatorStack.pop()!);
        }

        operatorStack.push(token);
        break;
      case TokenType.LeftParen:
        operatorStack.push(token);
        break;
      case TokenType.RightParen:
        while (
          operatorStack[operatorStack.length - 1] &&
          operatorStack[operatorStack.length - 1].type !== TokenType.RightParen
        ) {
          outputStack.push(operatorStack.pop()!);
        }

        if (
          operatorStack[operatorStack.length - 1] &&
          operatorStack[operatorStack.length - 1].type === TokenType.LeftParen
        ) {
          operatorStack.pop();
        }
        break;
      default:
        break;
    }

    current += 1;
  }

  if (tokens.length === 0) {
    while (operatorStack.length !== 0) {
      outputStack.push(operatorStack.pop()!);
    }
  }

  return outputStack.filter(
    token =>
      token.type !== TokenType.LeftParen && token.type !== TokenType.RightParen,
  );
};
