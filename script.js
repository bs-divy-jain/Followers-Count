var counter = document.querySelector(".counter");
var followers = document.querySelector(".followers");
console.log(followers);

let count = 1;

setInterval( () => {
    if(count<1000){
        count++;
        counter.innerText = count;
    }
},1);

setTimeout( () => {
    followers.innerText = "your instagram followers are 1000";
},5000);