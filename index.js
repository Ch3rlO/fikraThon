var arrayKill = [];
var ppl = 4345;
for (var i = 0; i < ppl; i++)
  arrayKill.push(i+1);

var i = 0;
for(; 1 < arrayKill.length;){
    arrayKill.push(arrayKill[i]);
    arrayKill.shift();
    arrayKill.shift();
}
console.log(arrayKill[0]);