import { TokenType } from '../Token';

export const getArity = (operator: TokenType): number => {
  switch (operator) {
    case TokenType.Star:
    case TokenType.Slash:
    case TokenType.Plus:
    case TokenType.Minus:
      return 2;
    default:
      return 0;
  }
};
