console.log('running')

let timePassing;
let seconds = 0;
let minutes = 0;
const secondsGoUp = () => {
    seconds++;
    $('.time').text(seconds)
    if (seconds % 60 === 0) {
        minutes++;
        $('.minutes').text(minutes);
        console.log(timePassing);
    }
}
$('.start').click(function () {
    timePassing = setInterval(secondsGoUp, 1000);
    console.log('start was pressed');
})
$('.stop').click(function () {
    clearInterval(timePassing);
    console.log('stop was pressed');

});


class tomogachi{
    constructor(name, age, typeOfTomo){
        this.name = '',
        this.age = 0,
        this.typeOfTomo = ''
    }
}


let boredom = 0;
const maxBoredom = 10;

// Sleepiness values
let sleepiness = 0;
const maxSleepiness = 10;


// Hunger Values
let hunger = 0;
const maxHunger = 10;

// timed events

const hungryboi = () => {
if(seconds % 3 === 0 ){
    hunger++;
    console.log('hunger has gone up');

    if (hunger === maxHunger) {
        alert('your Tomogachi has died! ;__;')
        clearInterval(timePassing);
    }
}
}
const boredboi = () => {
if(seconds % 2 === 0){
    console.log('your tomogachi is getting bored');
    boredom++;
    if (boredom === maxBoredom) {
        alert('your Tomogachi has died! ;__;')
        clearInterval(timePassing);

    }
}
}
const sleepyboi = () => {
if(seconds % 4 === 0){
    console.log('your tomogachi is getting sleepy');
    sleepiness++;
    if (sleepiness === maxSleepiness) {
        alert('your Tomogachi has died! ;__;')
        clearInterval(timePassing);
    }
}
}


// Time interval

// let timePassing;
// let seconds = 0;
// let minutes = 0;
// const secondsGoUp = () => {
//     seconds++;
//     $('.time').text(seconds)
//     if (seconds % 60 === 0) {
//         minutes++;
//         $('.minutes').text(minutes);
//         console.log(timePassing);
//     }
// }
// $('.start').click(function () {
//     timePassing = setInterval(secondsGoUp, 1000);
//     console.log('start was pressed');
// })
// $('.stop').click(function () {
//     clearInterval(timePassing);
//         console.log('stop was pressed');

// });
