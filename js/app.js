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
    attributes();
    deadboi();
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
// const statUpdate = () => {

//  attributes();
//  hungryboi();
//  boredboi();
//  sleepyboi();
// }
// Class creation of the tomogachi. 


class tomogachi{
    constructor(name, age){
        this.name = '',
        this.age = 0  
    }
}
const tomo = new tomogachi('shyboi ', 0);

//  name = $('#input-name').val();

// ================================
// starting and max values
//=================================

let boredom = 1;
let sleepiness = 1;
let hunger = 1;
let age = 0;

const deadboi = () => {
 if (hunger === 10) {
        alert('your Tomogachi has died! ;__; あなたのトモガチは死んでました。哀しい！')
        clearInterval(timePassing);
 }
 if (boredom === 10) {
        alert('your Tomogachi has died! ;__; あなたのトモガチは死んでました。哀しい！')
        clearInterval(timePassing);
    }
 if (sleepiness === 10) {
        alert('your Tomogachi has died! ;__; あなたのトモガチは死んでました。哀しい！')
        clearInterval(timePassing);
    }
     if(age === 30) {
        alert('your Tomogachi has died of old age. ;__; あなたのトモガチは死んでました。哀しい！')
        clearInterval(timePassing);
    }
};
// Button pressing Functions
// if play is cilcked it resets the value of what it was at to 1. 
$('.play').on('click', () => {
    boredom = 1;
    $('.boredom').text(boredom);
});
$('.sleep').on('click', () => {
    sleepiness--;
    $('.sleepiness').text(sleepiness);
});
$('.feed').on('click', () => {
    hunger --;
    $('.hunger').text(hunger);
});

// Display all of the stats
const attributes = () => {
     if (seconds % 10 === 0) {
         age++;
         console.log('one year older.');
         $('.age').text(age);
     }
     if (seconds % 3 === 0) {
         console.log('your tomogachi is getting sleepy');
         sleepiness++;
         $('.sleepiness').text(sleepiness);
     }
     if (seconds % 2 === 0) {
         console.log('your tomogachi is getting bored');
         boredom++;
         $('.boredom').text(boredom);
     }
     if (seconds % 3 === 0) {
         hunger++;
         console.log('hunger has gone up');
         $('.hunger').text(hunger);
     }
}
