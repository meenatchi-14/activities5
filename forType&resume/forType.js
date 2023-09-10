const log = (cse) => console.log(cse);
log(`JSON interate over all for loops
..........................................`)
var json=[
{
    "id":101,
    "name":"meena",
    "course":"cse",
    "pass":2018,
},{
    "id":102,
    "name":"krishna",
    "course":"ece",
    "pass":2018,
}
];
log(json);
//for loop
log(`for loop
............................................`)
for(let i=0;i<json.length;i++)
{
    obj=json[i];
    log(obj.id);
    log(obj.name);
    log(obj.course);
    log(obj.pass);
}
//for each
log(`for each loop
............................................`)
json.forEach (function(obj) {
    log(obj.id);
    log(obj.name);
    log(obj.course);
    log(obj.pass);
});
//for in
log(`for in loop
............................................`)
for(var key in json)
{if(json.hasOwnProperty(key)){
    log(json[key].id);
    log(json[key].name);
    log(json[key].course);
    log(json[key].pass);
}
}
log(`for of loop
............................................`)
let word=" ";
for(let w of json[key].name)
{
word += w;
}
log(word);
