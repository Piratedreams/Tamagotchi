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
    console.log(seconds);
    console.log('new tomogachi was created.')
});
$('.stop').click(function () {
    clearInterval(timePassing);
    clearInterval(secondsGoUp);
        console.log('stop was pressed');

});



// Class creation of the tomogachi. 


class tomogachi{
    constructor(name, age){
        this.name = '',
        this.age = 0  
    }
}
const tomo = new tomogachi('shyboi ', 0);

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

let age = 0;
// timed events


const hungryboi = () => {
if(seconds % 3 === 0 ){
    hunger++;
    console.log('hunger has gone up');
    $('.hunger').text(hunger);
}
    if (hunger === maxHunger) {
        alert('your Tomogachi has died! ;__; あなたのトモガチは死んでました。哀しい！')
        clearInterval(timePassing);
    }
        
}
$('.hunger').text(hunger);
// if feed is cilcked it resets the value of what it was at to 1. 
$('feed').on('click', () => {
    hunger = 1;
});

const boredboi = () => {
if(seconds % 2 === 0){
    console.log('your tomogachi is getting bored');
    boredom++;
    $('.boredom').text(boredom);
}
    if (boredom === maxBoredom) {
        alert('your Tomogachi has died! ;__; あなたのトモガチは死んでました。哀しい！')
        clearInterval(timePassing);
    }
}
// if play is cilcked it resets the value of what it was at to 1. 
$('.play').on('click', () => {
     boredom = 1;
});

boredboi();
const sleepyboi = () => {
if(seconds % 4 === 0){
    console.log('your tomogachi is getting sleepy');
    sleepiness++;
    $('.sleepiness').text(sleepiness);
}
    if (sleepiness === maxSleepiness) {
        alert('your Tomogachi has died! ;__; あなたのトモガチは死んでました。哀しい！')
        clearInterval(timePassing);
    }
     // make the lights turn off for the tomogachi.
};


$('.sleep').on('click', () => {
            sleepiness = 1;
});
sleepyboi();


const aging = () => {
    if(seconds % 15 === 0){
        age++;
        console.log('one year older.')
        $('.age').text(age);
    }
    if(age === 30) {
        alert('your Tomogachi has died of old age. ;__; あなたのトモガチは死んでました。哀しい！')
        clearInterval(timePassing);
    }
}
aging();

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
