// Generated from grammars/Calculator.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\fO\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f",
    "\u0003\u0002\u0003\u0002\u0003\u0002\u0007\u0002\u001d\n\u0002\f\u0002",
    "\u000e\u0002 \u000b\u0002\u0003\u0002\u0003\u0002\u0006\u0002$\n\u0002",
    "\r\u0002\u000e\u0002%\u0003\u0002\u0003\u0002\u0006\u0002*\n\u0002\r",
    "\u0002\u000e\u0002+\u0003\u0002\u0003\u0002\u0006\u00020\n\u0002\r\u0002",
    "\u000e\u00021\u0003\u0002\u0005\u00025\n\u0002\u0003\u0003\u0003\u0003",
    "\u0003\u0004\u0003\u0004\u0003\u0005\u0006\u0005<\n\u0005\r\u0005\u000e",
    "\u0005=\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0007",
    "\u0003\u0007\u0003\b\u0003\b\u0003\t\u0003\t\u0003\n\u0003\n\u0003\u000b",
    "\u0003\u000b\u0003\f\u0003\f\u0002\u0002\r\u0003\u0003\u0005\u0002\u0007",
    "\u0004\t\u0005\u000b\u0006\r\u0007\u000f\b\u0011\t\u0013\n\u0015\u000b",
    "\u0017\f\u0003\u0002\u0003\u0005\u0002\u000b\f\u000f\u000f\"\"\u0002",
    "U\u0002\u0003\u0003\u0002\u0002\u0002\u0002\u0007\u0003\u0002\u0002",
    "\u0002\u0002\t\u0003\u0002\u0002\u0002\u0002\u000b\u0003\u0002\u0002",
    "\u0002\u0002\r\u0003\u0002\u0002\u0002\u0002\u000f\u0003\u0002\u0002",
    "\u0002\u0002\u0011\u0003\u0002\u0002\u0002\u0002\u0013\u0003\u0002\u0002",
    "\u0002\u0002\u0015\u0003\u0002\u0002\u0002\u0002\u0017\u0003\u0002\u0002",
    "\u0002\u00034\u0003\u0002\u0002\u0002\u00056\u0003\u0002\u0002\u0002",
    "\u00078\u0003\u0002\u0002\u0002\t;\u0003\u0002\u0002\u0002\u000bA\u0003",
    "\u0002\u0002\u0002\rC\u0003\u0002\u0002\u0002\u000fE\u0003\u0002\u0002",
    "\u0002\u0011G\u0003\u0002\u0002\u0002\u0013I\u0003\u0002\u0002\u0002",
    "\u0015K\u0003\u0002\u0002\u0002\u0017M\u0003\u0002\u0002\u0002\u0019",
    "\u001a\u0005\u0005\u0003\u0002\u001a\u001e\u00070\u0002\u0002\u001b",
    "\u001d\u0005\u0005\u0003\u0002\u001c\u001b\u0003\u0002\u0002\u0002\u001d",
    " \u0003\u0002\u0002\u0002\u001e\u001c\u0003\u0002\u0002\u0002\u001e",
    "\u001f\u0003\u0002\u0002\u0002\u001f5\u0003\u0002\u0002\u0002 \u001e",
    "\u0003\u0002\u0002\u0002!#\u0005\u0007\u0004\u0002\"$\u0005\u0005\u0003",
    "\u0002#\"\u0003\u0002\u0002\u0002$%\u0003\u0002\u0002\u0002%#\u0003",
    "\u0002\u0002\u0002%&\u0003\u0002\u0002\u0002&\'\u0003\u0002\u0002\u0002",
    "\')\u00070\u0002\u0002(*\u0005\u0005\u0003\u0002)(\u0003\u0002\u0002",
    "\u0002*+\u0003\u0002\u0002\u0002+)\u0003\u0002\u0002\u0002+,\u0003\u0002",
    "\u0002\u0002,5\u0003\u0002\u0002\u0002-/\u0005\u0007\u0004\u0002.0\u0005",
    "\u0005\u0003\u0002/.\u0003\u0002\u0002\u000201\u0003\u0002\u0002\u0002",
    "1/\u0003\u0002\u0002\u000212\u0003\u0002\u0002\u000225\u0003\u0002\u0002",
    "\u000235\u0005\u0005\u0003\u00024\u0019\u0003\u0002\u0002\u00024!\u0003",
    "\u0002\u0002\u00024-\u0003\u0002\u0002\u000243\u0003\u0002\u0002\u0002",
    "5\u0004\u0003\u0002\u0002\u000267\u00042;\u00027\u0006\u0003\u0002\u0002",
    "\u000289\u00043;\u00029\b\u0003\u0002\u0002\u0002:<\t\u0002\u0002\u0002",
    ";:\u0003\u0002\u0002\u0002<=\u0003\u0002\u0002\u0002=;\u0003\u0002\u0002",
    "\u0002=>\u0003\u0002\u0002\u0002>?\u0003\u0002\u0002\u0002?@\b\u0005",
    "\u0002\u0002@\n\u0003\u0002\u0002\u0002AB\u0007,\u0002\u0002B\f\u0003",
    "\u0002\u0002\u0002CD\u00071\u0002\u0002D\u000e\u0003\u0002\u0002\u0002",
    "EF\u0007-\u0002\u0002F\u0010\u0003\u0002\u0002\u0002GH\u0007/\u0002",
    "\u0002H\u0012\u0003\u0002\u0002\u0002IJ\u0007*\u0002\u0002J\u0014\u0003",
    "\u0002\u0002\u0002KL\u0007+\u0002\u0002L\u0016\u0003\u0002\u0002\u0002",
    "MN\u000b\u0002\u0002\u0002N\u0018\u0003\u0002\u0002\u0002\t\u0002\u001e",
    "%+14=\u0003\b\u0002\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function CalculatorLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

CalculatorLexer.prototype = Object.create(antlr4.Lexer.prototype);
CalculatorLexer.prototype.constructor = CalculatorLexer;

Object.defineProperty(CalculatorLexer.prototype, "atn", {
        get : function() {
                return atn;
        }
});

CalculatorLexer.EOF = antlr4.Token.EOF;
CalculatorLexer.Number = 1;
CalculatorLexer.FIRSTDIGIT = 2;
CalculatorLexer.WS = 3;
CalculatorLexer.MULTIPLY = 4;
CalculatorLexer.DIVIDE = 5;
CalculatorLexer.ADD = 6;
CalculatorLexer.SUBTRACT = 7;
CalculatorLexer.LEFT = 8;
CalculatorLexer.RIGHT = 9;
CalculatorLexer.ErrorCharacter = 10;

CalculatorLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

CalculatorLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

CalculatorLexer.prototype.literalNames = [ null, null, null, null, "'*'", 
                                           "'/'", "'+'", "'-'", "'('", "')'" ];

CalculatorLexer.prototype.symbolicNames = [ null, "Number", "FIRSTDIGIT", 
                                            "WS", "MULTIPLY", "DIVIDE", 
                                            "ADD", "SUBTRACT", "LEFT", "RIGHT", 
                                            "ErrorCharacter" ];

CalculatorLexer.prototype.ruleNames = [ "Number", "DIGIT", "FIRSTDIGIT", 
                                        "WS", "MULTIPLY", "DIVIDE", "ADD", 
                                        "SUBTRACT", "LEFT", "RIGHT", "ErrorCharacter" ];

CalculatorLexer.prototype.grammarFileName = "Calculator.g4";



exports.CalculatorLexer = CalculatorLexer;

