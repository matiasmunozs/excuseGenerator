let who = ['The dog','My grandma','His turtle','My bird'];
let action = ['ate','peed','crushed','broke'];
let what = ['my homework', 'the keys', 'the car'];
let when = ['before the class','right on time','when I finished','during my lunch','while I was praying'];

var quien = Math.floor(Math.random()*who.length);
var accion = Math.floor(Math.random()*action.length);
var que = Math.floor(Math.random()*what.length);
var cuando = Math.floor(Math.random()*when.length);

excuse = ""

function excuseGen(){
    for(i=0;i<1;i++){
        return excuse = who[quien] + " " + action[accion] + " " + what[que] + " " + when[cuando]
    }
    return excuse
}

console.log(excuseGen());

document.querySelector('#excuse').innerHTML = excuseGen()

 


