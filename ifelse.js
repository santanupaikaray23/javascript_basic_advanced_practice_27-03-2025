if(condition){
    //do something
}else{
    //do something
}

var a = 23456
if(a%2==0){
    console.log(`Number ${a} is even`)
}else{
    console.log(`Number ${a} is oad`)
}
VM76:3 Number 23456 is even
undefined
var a = 23451
if(a%2==0){
    console.log(`Number ${a} is even`)
}else{
    console.log(`Number ${a} is oad`)
}
VM81:5 Number 23451 is oad
undefined
var a = 1
if(a){
console.log("hi")
}else{
console.log("Bie")
}
VM85:3 hi
undefined
var a = 0
if(a){
console.log("hi")
}else{
console.log("Bie")
}
VM89:5 Bie
undefined
var a = -1
if(a){
console.log("hi")
}else{
console.log("Bie")
}
VM93:3 hi
undefined

// Ternary > single line if else

var a = 10
a>10?"hi":"Bie"

var a = 1
if(a){
console.log("hi")
}else{
console.log("Bie")
}
VM85:3 hi
undefined
var a = 0
if(a){
console.log("hi")
}else{
console.log("Bie")
}
VM89:5 Bie
undefined
var a = -1
if(a){
console.log("hi")
}else{
console.log("Bie")
}
VM93:3 hi
undefined
var a = 23456
a%2==0
true
var a = 23457
a%2==0
false

var a = 10
a>10?"hi":"Bie"
'Bie'

var a = 10
a==10?"hi":"Bie"
'hi'

var a = 11
a>10?"hi":"Bie"
'hi'

var a = 9
a>10?"hi":"Bie"
'Bie'
var a = 10
a>10?a+1:a-1
9
var a = 10
a==10?a+1:a-1
11