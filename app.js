/* 
const _ = require('lodash')

const items = [1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems);
console.log("hello people");
console.log("hello");



const {readFile} = require('fs')
console.log('start');
readFile('./content/first.txt','utf8',(err,result) => {
    if(err){
        console.log(err)
        return
    }
    console.log(result)
    const first = result
    
})
console.log('starting next task');
*/
console.log('one');
setTimeout(() => {
    console.log('second');
},0)
console.log('last');

setInterval(() => {
    console.log('hello');
}, 2000)
console.log('i go first');
