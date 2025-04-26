for
while
do while
for of
for in
Map
filter
////////////////
for> generate series of value or help to iterate over the Array

for(i=0;i<5;i++){
    console.log(i)
}

let a = 10
for(var i=0; i<5; i++){
    console.log(a+i)
}

var city = ["London","Delhi",["Bmw","Audi","Skoda"],"NewYoke","Paris"]
for (i=0;i<city.length;i++){
    if(Array.isArray(city[i])){
        for(j=0;j<city[i].length;j++){
            console.log(city[i][j])

        }
    
}else{
    console.log(city[i])
}
}