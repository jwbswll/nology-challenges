# Boolean Logic Challenge

Background
As a career developer you will have to read other peoples' code, A LOT of it, and learning how to read boolean expressions is a core part of understanding how a codebase works.

MVP
Without running the code, figure out the output for each expression, including whether the output is truthy / falsey.

Be prepared to tell us your reasoning!

```
2 == '2';     
true; '2' will be converted to 2 before evaluation
2 === 2;    
true; same value, same type
2 === '2';    
false; same value, different type
'2' + 3 == 23;    
true; '23' == 23
'2' + 3 === 5;    
false; '23' === 5; different value, different type
10 % 3;     
1; truthy; 1 has a value and therefore truthy
10 % 3 === 1;     
true; same value, same type
(100 % 7) % 5;    
2; truthy; if numerator smaller than denominator, console returns numerator
(100 % 7) % 5 !== 0;    
true; 2 is not equal to 0
(100 % 7) % 9 == 2; 
true; 2 is equal to 2
!(10 % 2); 
false; not a number is falsy
!!!!((10 % 7) % 3); 
false; not 0 = true, not not 0 = false, not not not 0 = true, not not not not 0 = false.
10 % 3 === -1 % 2; 
false; 1 === -1 return false
(892783 != '89278' + 3) == 0; 
true; 892783 != '892783' = false; false == 0 = true
true && false;    
false; both expressions are not true
false || true;    
true; one expression is true
true || false;    
true; one expression is true
true || false;    
true; one expression is true
true || false + true;     
2; truthy; true + true == 1 + 1
true * false && false + true;     
0; 0 && 1; returns the falsy expression
10 && 123 && -1 && 3;     
3; truthy; if both expressions are true, js returns the right hand side
10 && 123 && 0 && 3;    
0; 10 && 123 => 123 && 0 => false && 3 => false
(10 && (123 || '') && parseInt('Roisin')) || 23 / 23 - 1;     
0; NaN || 0;
3 && 'Calum' && ('' || 26);     
26; truthy && truthy && (falsy || truthy)
3 && 'Remi' && (null || 86 * 0 || ('' + 1 && 'Cat' + 'Dog'));   
'CatDog'; truthy && truthy return the rightest hand value
```
