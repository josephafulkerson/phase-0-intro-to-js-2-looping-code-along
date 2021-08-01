
const names=['Ada', 'Brendan', 'Ali'];
const event='birthday';

function writeCards(names, event) {
    let emptyArray=[];
    for (let n = 0; n < names.length; n++) {
       emptyArray.push(`Thank you, ${names[n]}, for the wonderful ${event} gift!`);
}
    return emptyArray;
}

function countDown(integer) {
    while (integer >=0) {
        console.log(integer--);
    }
    return countDown;
}
    
