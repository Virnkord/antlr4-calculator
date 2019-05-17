// Generated from grammars/Calculator.g4 by ANTLR 4.7.1
// jshint ignore: start
const CalculatorVisitor = require('./lib/CalculatorVisitor').CalculatorVisitor;

class Visitor extends CalculatorVisitor{
	// Visit a parse tree produced by CalculatorParser#calculator.
	start(ctx) {
		return this.visitCalculator(ctx);
	}
	
	visitCalculator(ctx) {
  		return ctx.expr(0).accept(this);
	};

	visitExpression(context) {
  		return context.accept(this);
	};

	// Visit a parse tree produced by CalculatorParser#Parenthesis.
	visitParenthesis(ctx) {
  		return this.visitExpression(ctx.expr(0));
	};

	// Visit a parse tree produced by CalculatorParser#Number.
	visitNumber(ctx) {
  		return Number(ctx.getText().replace(',', '.'));
	};

	// Visit a parse tree produced by CalculatorParser#Negate.
	visitNegate(ctx) {
  		return -1 * this.visitExpression(ctx.expr(0));
	};


	// Visit a parse tree produced by CalculatorParser#MultiplyDivide.
	visitMultiplyDivide(ctx) {
	  if (ctx.op.text === '*') {
	  	return this.visitExpression(ctx.expr(0)) * this.visitExpression(ctx.expr(1));
	  } else {
	  	let divisor = this.visitExpression(ctx.expr(1));
	    if (divisor !== 0) {
	    	return this.visitExpression(ctx.expr(0)) / divisor;
	    }
  		return NaN;
	  	}
	};

	// Visit a parse tree produced by CalculatorParser#AddSubtract.
	visitAddSubtract(ctx) {
    	if (ctx.op.text === '+'){
    		return (this.visitExpression(ctx.expr(0)) + this.visitExpression(ctx.expr(1)));
    	}else{
    		return (this.visitExpression(ctx.expr(0)) - this.visitExpression(ctx.expr(1)));
    	}
	};
}

module.exports = Visitor;



