console.log('running')





//========================
// Clock
//========================


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
$('.start').on('click', () => {
    timePassing = setInterval(secondsGoUp, 1000);
    console.log('start was pressed');
    console.log(timePassing);
    console.log('new tomogachi was created.')
});
$('.stop').click(function () {
    clearInterval(timePassing);
        console.log('stop was pressed');

});



// Class creation of the tomogachi. 


class tomogachi{
    constructor(name, age, typeOfTomo){
        this.name = '',
        this.age = 0,
        this.typeOfTomo = ''
    }
}
const tomo = new tomogachi('shyboi ', 0, 'lilOne');

// ================================
// starting and max values
//=================================

let boredom = 1;
const maxBoredom = 10;

// Sleepiness values
let sleepiness = 1;
const maxSleepiness = 10;


// Hunger Values
let hunger = 1;
const maxHunger = 10;

// timed events


const hungryboi = () => {
if(seconds % 3 === 0 ){
    hunger++;
    console.log('hunger has gone up');

    if (hunger === maxHunger) {
        alert('your Tomogachi has died! ;__; あなたのトモガチは死んでました。哀しい！')
        clearInterval(timePassing);
    }
}
// if play is cilcked it resets the value of what it was at to 1. 
$('feed').on('click', () => {
    hunger = 1;
});
}
const boredboi = () => {
if(seconds % 2 === 0){
    console.log('your tomogachi is getting bored');
    boredom++;
    if (boredom === maxBoredom) {
        alert('your Tomogachi has died! ;__; あなたのトモガチは死んでました。哀しい！')
        clearInterval(timePassing);
    }
}
// if play is cilcked it resets the value of what it was at to 1. 
$('.play').on('click', () => {
     boredom = 1;
});
}
const sleepyboi = () => {
if(seconds % 4 === 0){
    console.log('your tomogachi is getting sleepy');
    sleepiness++;
    if (sleepiness === maxSleepiness) {
        alert('your Tomogachi has died! ;__; あなたのトモガチは死んでました。哀しい！')
        clearInterval(timePassing);
    }
    // if play is cilcked it resets the value of what it was at to 1. 
$('.sleep').on('click', () => {
     sleepiness = 1;
     // make the lights turn off for the tomogachi.
});
}
}
const aging = () => {
    if(seconds % 15 === 0){
        age++;
    }
    if(age === 30) {
        alert('your Tomogachi has died of old age. ;__; あなたのトモガチは死んでました。哀しい！')
        clearInterval(timePassing);
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
