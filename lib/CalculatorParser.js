// Generated from grammars/Calculator.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');
var CalculatorListener = require('./CalculatorListener').CalculatorListener;
var CalculatorVisitor = require('./CalculatorVisitor').CalculatorVisitor;

var grammarFileName = "Calculator.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\f#\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0003\u0002\u0006",
    "\u0002\b\n\u0002\r\u0002\u000e\u0002\t\u0003\u0002\u0003\u0002\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0005\u0003\u0016\n\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0007\u0003\u001e\n",
    "\u0003\f\u0003\u000e\u0003!\u000b\u0003\u0003\u0003\u0002\u0003\u0004",
    "\u0004\u0002\u0004\u0002\u0004\u0003\u0002\u0006\u0007\u0003\u0002\b",
    "\t\u0002%\u0002\u0007\u0003\u0002\u0002\u0002\u0004\u0015\u0003\u0002",
    "\u0002\u0002\u0006\b\u0005\u0004\u0003\u0002\u0007\u0006\u0003\u0002",
    "\u0002\u0002\b\t\u0003\u0002\u0002\u0002\t\u0007\u0003\u0002\u0002\u0002",
    "\t\n\u0003\u0002\u0002\u0002\n\u000b\u0003\u0002\u0002\u0002\u000b\f",
    "\u0007\u0002\u0002\u0003\f\u0003\u0003\u0002\u0002\u0002\r\u000e\b\u0003",
    "\u0001\u0002\u000e\u000f\u0007\t\u0002\u0002\u000f\u0016\u0005\u0004",
    "\u0003\u0005\u0010\u0016\u0007\u0003\u0002\u0002\u0011\u0012\u0007\n",
    "\u0002\u0002\u0012\u0013\u0005\u0004\u0003\u0002\u0013\u0014\u0007\u000b",
    "\u0002\u0002\u0014\u0016\u0003\u0002\u0002\u0002\u0015\r\u0003\u0002",
    "\u0002\u0002\u0015\u0010\u0003\u0002\u0002\u0002\u0015\u0011\u0003\u0002",
    "\u0002\u0002\u0016\u001f\u0003\u0002\u0002\u0002\u0017\u0018\f\u0007",
    "\u0002\u0002\u0018\u0019\t\u0002\u0002\u0002\u0019\u001e\u0005\u0004",
    "\u0003\b\u001a\u001b\f\u0006\u0002\u0002\u001b\u001c\t\u0003\u0002\u0002",
    "\u001c\u001e\u0005\u0004\u0003\u0007\u001d\u0017\u0003\u0002\u0002\u0002",
    "\u001d\u001a\u0003\u0002\u0002\u0002\u001e!\u0003\u0002\u0002\u0002",
    "\u001f\u001d\u0003\u0002\u0002\u0002\u001f \u0003\u0002\u0002\u0002",
    " \u0005\u0003\u0002\u0002\u0002!\u001f\u0003\u0002\u0002\u0002\u0006",
    "\t\u0015\u001d\u001f"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, null, null, null, "'*'", "'/'", "'+'", "'-'", 
                     "'('", "')'" ];

var symbolicNames = [ null, "Number", "FIRSTDIGIT", "WS", "MULTIPLY", "DIVIDE", 
                      "ADD", "SUBTRACT", "LEFT", "RIGHT", "ErrorCharacter" ];

var ruleNames =  [ "calculator", "expr" ];

function CalculatorParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

CalculatorParser.prototype = Object.create(antlr4.Parser.prototype);
CalculatorParser.prototype.constructor = CalculatorParser;

Object.defineProperty(CalculatorParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

CalculatorParser.EOF = antlr4.Token.EOF;
CalculatorParser.Number = 1;
CalculatorParser.FIRSTDIGIT = 2;
CalculatorParser.WS = 3;
CalculatorParser.MULTIPLY = 4;
CalculatorParser.DIVIDE = 5;
CalculatorParser.ADD = 6;
CalculatorParser.SUBTRACT = 7;
CalculatorParser.LEFT = 8;
CalculatorParser.RIGHT = 9;
CalculatorParser.ErrorCharacter = 10;

CalculatorParser.RULE_calculator = 0;
CalculatorParser.RULE_expr = 1;

function CalculatorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CalculatorParser.RULE_calculator;
    return this;
}

CalculatorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CalculatorContext.prototype.constructor = CalculatorContext;

CalculatorContext.prototype.EOF = function() {
    return this.getToken(CalculatorParser.EOF, 0);
};

CalculatorContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

CalculatorContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalculatorListener ) {
        listener.enterCalculator(this);
	}
};

CalculatorContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalculatorListener ) {
        listener.exitCalculator(this);
	}
};

CalculatorContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalculatorVisitor ) {
        return visitor.visitCalculator(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CalculatorParser.CalculatorContext = CalculatorContext;

CalculatorParser.prototype.calculator = function() {

    var localctx = new CalculatorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, CalculatorParser.RULE_calculator);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 5; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 4;
            this.expr(0);
            this.state = 7; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << CalculatorParser.Number) | (1 << CalculatorParser.SUBTRACT) | (1 << CalculatorParser.LEFT))) !== 0));
        this.state = 9;
        this.match(CalculatorParser.EOF);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CalculatorParser.RULE_expr;
    return this;
}

ExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExprContext.prototype.constructor = ExprContext;


 
ExprContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};

function ParenthesisContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ParenthesisContext.prototype = Object.create(ExprContext.prototype);
ParenthesisContext.prototype.constructor = ParenthesisContext;

CalculatorParser.ParenthesisContext = ParenthesisContext;

ParenthesisContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};
ParenthesisContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalculatorListener ) {
        listener.enterParenthesis(this);
	}
};

ParenthesisContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalculatorListener ) {
        listener.exitParenthesis(this);
	}
};

ParenthesisContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalculatorVisitor ) {
        return visitor.visitParenthesis(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function NumberContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

NumberContext.prototype = Object.create(ExprContext.prototype);
NumberContext.prototype.constructor = NumberContext;

CalculatorParser.NumberContext = NumberContext;

NumberContext.prototype.Number = function() {
    return this.getToken(CalculatorParser.Number, 0);
};
NumberContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalculatorListener ) {
        listener.enterNumber(this);
	}
};

NumberContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalculatorListener ) {
        listener.exitNumber(this);
	}
};

NumberContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalculatorVisitor ) {
        return visitor.visitNumber(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function NegateContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

NegateContext.prototype = Object.create(ExprContext.prototype);
NegateContext.prototype.constructor = NegateContext;

CalculatorParser.NegateContext = NegateContext;

NegateContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};
NegateContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalculatorListener ) {
        listener.enterNegate(this);
	}
};

NegateContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalculatorListener ) {
        listener.exitNegate(this);
	}
};

NegateContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalculatorVisitor ) {
        return visitor.visitNegate(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function MultiplyDivideContext(parser, ctx) {
	ExprContext.call(this, parser);
    this.op = null; // Token;
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

MultiplyDivideContext.prototype = Object.create(ExprContext.prototype);
MultiplyDivideContext.prototype.constructor = MultiplyDivideContext;

CalculatorParser.MultiplyDivideContext = MultiplyDivideContext;

MultiplyDivideContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};
MultiplyDivideContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalculatorListener ) {
        listener.enterMultiplyDivide(this);
	}
};

MultiplyDivideContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalculatorListener ) {
        listener.exitMultiplyDivide(this);
	}
};

MultiplyDivideContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalculatorVisitor ) {
        return visitor.visitMultiplyDivide(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function AddSubtractContext(parser, ctx) {
	ExprContext.call(this, parser);
    this.op = null; // Token;
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AddSubtractContext.prototype = Object.create(ExprContext.prototype);
AddSubtractContext.prototype.constructor = AddSubtractContext;

CalculatorParser.AddSubtractContext = AddSubtractContext;

AddSubtractContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};
AddSubtractContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalculatorListener ) {
        listener.enterAddSubtract(this);
	}
};

AddSubtractContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalculatorListener ) {
        listener.exitAddSubtract(this);
	}
};

AddSubtractContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalculatorVisitor ) {
        return visitor.visitAddSubtract(this);
    } else {
        return visitor.visitChildren(this);
    }
};



CalculatorParser.prototype.expr = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ExprContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 2;
    this.enterRecursionRule(localctx, 2, CalculatorParser.RULE_expr, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 19;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case CalculatorParser.SUBTRACT:
            localctx = new NegateContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 12;
            this.match(CalculatorParser.SUBTRACT);
            this.state = 13;
            this.expr(3);
            break;
        case CalculatorParser.Number:
            localctx = new NumberContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 14;
            this.match(CalculatorParser.Number);
            break;
        case CalculatorParser.LEFT:
            localctx = new ParenthesisContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 15;
            this.match(CalculatorParser.LEFT);
            this.state = 16;
            this.expr(0);
            this.state = 17;
            this.match(CalculatorParser.RIGHT);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 29;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,3,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 27;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new MultiplyDivideContext(this, new ExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, CalculatorParser.RULE_expr);
                    this.state = 21;
                    if (!( this.precpred(this._ctx, 5))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
                    }
                    this.state = 22;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(_la===CalculatorParser.MULTIPLY || _la===CalculatorParser.DIVIDE)) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 23;
                    this.expr(6);
                    break;

                case 2:
                    localctx = new AddSubtractContext(this, new ExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, CalculatorParser.RULE_expr);
                    this.state = 24;
                    if (!( this.precpred(this._ctx, 4))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
                    }
                    this.state = 25;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(_la===CalculatorParser.ADD || _la===CalculatorParser.SUBTRACT)) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 26;
                    this.expr(5);
                    break;

                } 
            }
            this.state = 31;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,3,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};


CalculatorParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 1:
			return this.expr_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

CalculatorParser.prototype.expr_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 5);
		case 1:
			return this.precpred(this._ctx, 4);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.CalculatorParser = CalculatorParser;
