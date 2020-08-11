/* eslint-disable no-plusplus */
import { Token, TokenType } from './Token';

const lexer = (text: string): Token[] => {
  let current = 0;
  let start = 0;

  const tokens: Token[] = [];

  const isAtEnd = () => current >= text.length;
  const isDigit = (c: string) => c >= '0' && c <= '9';
  // const isAlpha = (c: string) =>
  //   (c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z') || c === '_';
  // const isAlphaNumeric = (c: string) => isDigit(c) || isAlpha(c);

  const peek = (offset = 0): string => {
    if (current + offset > text.length) return text[text.length - 1];

    return text[current + offset];
  };

  const advance = (): string => {
    current++;
    return text[current - 1];
  };

  const addToken = (type: TokenType, literal: any = null) => {
    const value = text.substring(start, current);
    tokens.push(new Token(type, value, literal));
  };

  const number = (): void => {
    while (isDigit(peek())) advance();

    if (peek() === '.' && isDigit(peek(1))) {
      advance();
      while (isDigit(peek())) advance();
    }

    const value = text.substring(start, current);
    addToken(TokenType.Number, Number(value));
  };

  const scanToken = () => {
    const c = advance();

    switch (c) {
      case '\t':
      case ' ':
      case '\r':
      case '\n':
        break;
      case '(':
        addToken(TokenType.LeftParen);
        break;
      case ')':
        addToken(TokenType.RightParen);
        break;
      case '+':
        addToken(TokenType.Plus, '+');
        break;
      case '-':
        addToken(TokenType.Minus, '-');
        break;
      case '*':
        addToken(TokenType.Star, '*');
        break;
      case '/':
        addToken(TokenType.Slash, '/');
        break;
      default:
        if (isDigit(c)) number();
        else throw new Error(`Unexpected character ${c}`);
        break;
    }
  };

  while (!isAtEnd()) {
    start = current;
    scanToken();
  }

  tokens.push(new Token(TokenType.EOF, '', null));
  return tokens;
};

export { lexer };
