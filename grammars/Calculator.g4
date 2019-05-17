grammar Calculator;

calculator
  : expr+ EOF
  ;

expr
  : expr op=('*'|'/') expr                 # MultiplyDivide
  | expr op=('+'|'-') expr                 # AddSubtract
  | '-' expr                               # Negate
  | Number                                 # Number
  | '(' expr ')'                           # Parenthesis
  ;

Number
  : DIGIT '.' DIGIT*
  | FIRSTDIGIT DIGIT+ '.' DIGIT+
  | FIRSTDIGIT DIGIT+
  | DIGIT
  ;

fragment
DIGIT: ('0'..'9');
FIRSTDIGIT: ('1'..'9'); 

WS: [ \t\r\n]+ -> skip;
MULTIPLY: '*';
DIVIDE: '/';
ADD: '+';
SUBTRACT: '-';
LEFT: '(';
RIGHT: ')';
ErrorCharacter : . ;
