// Generated from grammars/Calculator.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by CalculatorParser.

function CalculatorVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

CalculatorVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
CalculatorVisitor.prototype.constructor = CalculatorVisitor;

// Visit a parse tree produced by CalculatorParser#calculator.
CalculatorVisitor.prototype.visitCalculator = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CalculatorParser#Parenthesis.
CalculatorVisitor.prototype.visitParenthesis = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CalculatorParser#Number.
CalculatorVisitor.prototype.visitNumber = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CalculatorParser#Negate.
CalculatorVisitor.prototype.visitNegate = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CalculatorParser#MultiplyDivide.
CalculatorVisitor.prototype.visitMultiplyDivide = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CalculatorParser#AddSubtract.
CalculatorVisitor.prototype.visitAddSubtract = function(ctx) {
  return this.visitChildren(ctx);
};



exports.CalculatorVisitor = CalculatorVisitor;
