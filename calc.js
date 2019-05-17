const antlr4 = require('antlr4');
const CalculatorLexer = require('./lib/CalculatorLexer.js');
const CalculatorParser = require('./lib/CalculatorParser.js');
const calcVisitor = require('./CalculatorVisitor.js');

const input = '(7 * (2 + 1) + 3) / (9 - 1)';
const chars = new antlr4.InputStream(input);
const lexer = new CalculatorLexer.CalculatorLexer(chars);
const tokens  = new antlr4.CommonTokenStream(lexer);
const parser = new CalculatorParser.CalculatorParser(tokens);
const tree = parser.calculator();
//const visitor = new calcVisitor.CalculatorVisitor();
const result = new calcVisitor().start(tree);

//console.log(tree.toStringTree(parser.ruleNames));
console.log(JSON.stringify(result));

