/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export enum TokenType {
  Plus,
  Minus,
  Star,
  Slash,
  Number,
  LeftParen,
  RightParen,
  EOF,
}

export class Token {
  private readonly _literal: any;
  private readonly _lexeme: string;
  private readonly _type: TokenType;

  constructor(type: TokenType, lexeme: string, literal: any) {
    this._literal = literal;
    this._type = type;
    this._lexeme = lexeme;
  }

  public get literal(): any {
    return this._literal;
  }

  public get lexeme(): string {
    return this._lexeme;
  }

  public get type(): TokenType {
    return this._type;
  }

  public toString(): string {
    return `Token<${this.type} ${this.lexeme} ${this.literal}>`;
  }
}
