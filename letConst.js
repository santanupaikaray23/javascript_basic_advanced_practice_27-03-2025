var > We are able to redeclare and reassign
let > We can't able to redeclare but we can reassign
const > We can't redeclare nor reassign

var a = 10
undefined
> a
10
> var a =  12
undefined
> a
12
> a = 13
13
> a
13

var a > declare
a = 10 > assignment

let b = 10
undefined
> b
10
> let b = 12
Uncaught SyntaxError: Identifier 'b' has already been declared
> b = 23
23
> b
23