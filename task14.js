// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// // Explain the output at each stage:
--a; (answer is 1)
--a - --b; (answer is 1)
--a - --b + ++b; (answer is 3)
--a - --b + ++b + b--; (answer is 5)