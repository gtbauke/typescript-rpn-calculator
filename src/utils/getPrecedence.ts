import { TokenType } from '../Token';

export const getPrecedence = (operator: TokenType): number => {
  switch (operator) {
    // case TokenType.LeftParen:
    //   return 3;
    case TokenType.Star:
    case TokenType.Slash:
      return 2;
    case TokenType.Plus:
    case TokenType.Minus:
      return 1;
    default:
      return 0;
  }
};
