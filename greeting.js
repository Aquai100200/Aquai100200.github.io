var today = new Date();
var hourNow = today.getHours();
var minNow = today.getMinutes();
var timeNow = hourNow + ':' + minNow;
var greeting;

if (timeNow > 18 + ':' + 0) {
    greeting = 'Good Evening!';
} else if (timeNow > 12 + ':' + 0) {
    greeting = 'Good Afternoon!';
} else if (timeNow > 0 + ':' + 0) {
    greeting = 'Good Morning!';
} else {
    greeting = 'Welcome!'
}

document.write('<h2>' + greeting +'</h2>');