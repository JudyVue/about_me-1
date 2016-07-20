var userName = prompt('Welcome! What is your name?');

alert('Thank you for visiting my site, ' + userName + '! Let\'s see how much you already know about me! Please answer true or false');

var answer1 = prompt('I was born on the same day Julius Caesar was assassinated.');

if (answer1.toLowerCase() === 'true' || answer1.toLowerCase() === 't') {
  alert('Great guess, ' + userName + '! I was born on the Ides of March.');
} else {
  alert('Sorry, ' + userName + ', no bueno. I was born on March 15.');
}

var answer2 = prompt('I am from West Virginia.');

if (answer2.toLowerCase() === 'true' || answer2.toLowerCase() === 't') {
  alert('Excellent! I was born and raised in West Virginia.');
} else {
  alert('Sorry, ' + userName + ', that is wrong. I was born and raised in West Virginia.');
}

var answer3 = prompt('I played basketball at West Virginia University.');

if (answer3.toLowerCase() === 'false' || answer3.toLowerCase() === 'f') {
  alert('That\'s right! Although I am a great hooper, I played football for the Mountaineers.');
} else {
  alert('Not a fan, I suppose. I was a kicker on the football team at WVU.');
}

var answer4 = prompt('Italian cuisine is my favorite.');

if (answer4.toLowerCase() === 'true' || answer4.toLowerCase() === 't') {
  alert('Bravo Bravo! Especially Chicken Alfredo.');
} else {
  alert('Non buono, ' + userName + '. I could eat pasta everyday for the rest of my life.');
}

var answer5 = prompt('I have always wanted to be a pilot.');

if (answer5.toLowerCase() === 'true' || answer5.toLowerCase() === 't') {
  alert('You know me well, ' + userName + '! I have always loved flying.');
} else {
  alert('This is true. I still aspire to be a pilot one day.');
}
