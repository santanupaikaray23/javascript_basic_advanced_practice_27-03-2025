// Array is a collection of homogenious or hetrigenious data type

var a = [1,2,3,44,56,23] (Array of number)
var b = ['sdff','werr','fghh','iuhg'] (Array of String)
var c = [true,false,false,true] (Array of Boolean)
var d = [3,,45,56,'sdf','erty',true,false,'dfgh']

var city = ["London","Delhi","NewYork","Paris"]

var city = ["London","Delhi","NewYork","Paris"]
undefined
typeof(city)
'object'
city[0]
'London'
city[1]
'Delhi'
var city = ["London","Delhi","NewYork","Paris"]
undefined
city.push('Amsterdam')
5
city
(5) ['London', 'Delhi', 'NewYork', 'Paris', 'Amsterdam']
var city = ["London","Delhi","NewYork","Paris"]
undefined
city.pop()
'Paris'
var city = ["London","Delhi","NewYork","Paris"]

undefined
city.shift()
'London'
city
(3) ['Delhi', 'NewYork', 'Paris']
city
(3) ['Delhi', 'NewYork', 'Paris']
city.unshift()
3
city.unshift('Check')
4
city
(4) ['Check', 'Delhi', 'NewYork', 'Paris']


push > Add in the end of the Array
unshift > Add in the begining of the Array
pop > Always remove the last value of Array
shift > Always remove first value of Array

splice(startIndex, deletecount, value)

var city = ["London","Delhi","NewYork","Paris"]
undefined
typeof(city)
'object'
city[0]
'London'
city[1]
'Delhi'
var city = ["London","Delhi","NewYork","Paris"]
undefined
city.push('Amsterdam')
5
city
(5) ['London', 'Delhi', 'NewYork', 'Paris', 'Amsterdam']
var city = ["London","Delhi","NewYork","Paris"]
undefined
city.pop()
'Paris'
var city = ["London","Delhi","NewYork","Paris"]

undefined
city.shift()
'London'
city
(3) ['Delhi', 'NewYork', 'Paris']
city
(3) ['Delhi', 'NewYork', 'Paris']
city.unshift()
3
city.unshift('Check')
4
city
(4) ['Check', 'Delhi', 'NewYork', 'Paris']
var city = ["London","Delhi","NewYork","Paris"]
undefined
city.slice(1)
(3) ['Delhi', 'NewYork', 'Paris']
city.slice(2)
(2) ['NewYork', 'Paris']
city
(4) ['London', 'Delhi', 'NewYork', 'Paris']
city.slice(2,4)
(2) ['NewYork', 'Paris']
city
(4) ['London', 'Delhi', 'NewYork', 'Paris']
city.slice(1,3)
(2) ['Delhi', 'NewYork']
city
(4) ['London', 'Delhi', 'NewYork', 'Paris']
city.splice(2,2)
(2) ['NewYork', 'Paris']
city
(2) ['London', 'Delhi']
city.splice(1,0,'Mumbai','Nice')
[]
city
(4) ['London', 'Mumbai', 'Nice', 'Delhi']

var a = ['a','b','c',1]
var b = [1,2,3]
a+b
'a,b,c,11,2,3'