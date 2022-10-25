var arr = [];
do{
var a = prompt("input numbers");
arr.push(a);
}while(a != ''  &&  isNaN(a) == false && a != null);
var newArr = arr.pop();
var s = 0;
for (i=0;i<arr.length;i++){
    var el = +arr [i];
   s+= el;
}
console.log(s);