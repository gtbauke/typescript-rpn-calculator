/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable no-case-declarations */
import { Token, TokenType } from './Token';
// import { getArity } from './utils/getArity';

export const interpret = (tokens: Token[]): number => {
  const valuesStack: number[] = [];

  tokens.forEach(token => {
    switch (token.type) {
      case TokenType.Number:
        valuesStack.push(token.literal as number);
        break;
      case TokenType.Plus:
      case TokenType.Minus:
      case TokenType.Star:
      case TokenType.Slash:
        // const arity = getArity(token.type);
        const right = valuesStack.pop();
        const left = valuesStack.pop();

        if (token.type === TokenType.Plus) {
          valuesStack.push(left! + right!);
        }

        if (token.type === TokenType.Minus) {
          valuesStack.push(left! - right!);
        }

        if (token.type === TokenType.Star) {
          valuesStack.push(left! * right!);
        }

        if (token.type === TokenType.Slash) {
          valuesStack.push(left! / right!);
        }
        break;
      default:
        break;
    }
  });

  return valuesStack.pop()!;
};
