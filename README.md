﻿# antlr-calculator

Simple calculator written using Antlr4 and Javascript.

## Installation

Clone this repository and run "node calc.js".

## Usage

If the grammar file (./grammars/Calculator.g4) is modified, it is necessary to restart ANTLR to apply the changes with command "npm run gen".

Input string is in file "calc.js" - line 6 ( default line - "const input = '(7 * (2 + 1) + 3) / (9 - 1)';").

Allowable operators: * - + / ( )

## References

Grammar based on https://github.com/baloodevil/antlr4-calculator-javascript Calculator.g4 grammar.

Visitor based on https://github.com/GeorgDangl/antlr-calculator#antlr-calculator FormulaVisitor.js.
