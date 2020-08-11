import { lexer } from './Lexer';
import { parse } from './Parser';
import { interpret } from './Interpreter';

const run = () => {
  // console.log(process.argv);
  const expression = process.argv[2];
  console.log(expression);

  // const tokens = parse(lexer(expression));
  const tokens = lexer(expression);
  const parsedTokens = parse(tokens);
  const result = interpret(parsedTokens);

  console.log(result);
};

run();
