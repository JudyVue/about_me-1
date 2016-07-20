var userName = prompt('What is your name?');

alert('Hi, ' + userName + ', welcome! Let\'s see how much you already know about me! Please answer true or false');

var answer1 = prompt('I am from West Virginia?');

if (answer1 === 'True' || answer1 === 'true') {
  alert('That is right, ' + userName + '! I was born and raised in West Virginia.');
} else {
  alert('Sorry, ' + userName + ', no bueno. I was born and raised in West Virginia.');
}

var answer2 = prompt('I am the youngest in my family?');

if (answer2 === 'True' || answer2 === 'true') {
  alert('Correct! I am the youngest. My siblings are Kate, Michelle, Stephen, and Lawrence.');
} else {
  alert('I wish. I was bullied by my four older siblings growing up.');
}

var answer1 = prompt('I played basketball at West Virginia University?');

if (answer1 === 'False' || answer1 === 'false') {
  alert('That\'s right! Although I am a great hooper, I played football for the Mountaineers.');
} else {
  alert('Not a true fan... that is wrong. I was a kicker on the football team at WVU.');
}

var answer1 = prompt('Italian cuisine is my favorite?');

if (answer1 === 'True' || answer1 === 'true') {
  alert('Bravo Bravo! Chicken Alfredo is my favorite.');
} else {
  alert('Non buono, ' + userName + '. I could eat pasta everyday for the rest of my life.');
}

var answer1 = prompt('I have always wanted to be a pilot?');

if (answer1 === 'True' || answer1 === 'true') {
  alert('You know me well, ' + userName + '! I have always loved flying.');
} else {
  alert('This is true. I still aspire to be a pilot one day.');
}
