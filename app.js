var userName = prompt('Welcome! What is your name?');

alert('Thank you for visiting my site, ' + userName + '! Let\'s see how much you already know about me! Please answer yes or no');

var answerOne = prompt('I was born on the same day Julius Caesar was assassinated.');

if (answerOne.toLowerCase() === 'yes' || answerOne.toLowerCase() === 'y') {
  alert('Great guess, ' + userName + '! I was born on the Ides of March.');
} else {
  alert('Sorry, ' + userName + ', no bueno. I was born on March 15.');
}

var answerTwo = prompt('I am from West Virginia.');

if (answerTwo.toLowerCase() === 'yes' || answerTwo.toLowerCase() === 'y') {
  alert('Excellent! I was born and raised in West Virginia.');
} else {
  alert('Sorry, ' + userName + ', that is wrong. I was born and raised in West Virginia.');
}

var answerThree = prompt('I played basketball at West Virginia University.');

if (answerThree.toLowerCase() === 'no' || answerThree.toLowerCase() === 'n') {
  alert('That\'s right! Although I am a great hooper, I played football for the Mountaineers.');
} else {
  alert('Not a fan, I suppose. I was a kicker on the football team at WVU.');
}

var answerFour = prompt('Italian cuisine is my favorite.');

if (answerFour.toLowerCase() === 'yes' || answerFour.toLowerCase() === 'y') {
  alert('Bravo Bravo! More pasta please.');
} else {
  alert('Non buono, ' + userName + '. I could eat pasta everyday for the rest of my life.');
}

var answerFive = prompt('I have always wanted to be a pilot.');

if (answerFive.toLowerCase() === 'yes' || answerFive.toLowerCase() === 'y') {
  alert('You know me well, ' + userName + '! I have always loved flying.');
} else {
  alert('This is true. I still aspire to be a pilot one day.');
}

var jerseyNumber = 48;

for (i = 0; i < 4; i++) {
  var jerseyAnswer = prompt('What jersey number did I wear in college?');
  if ((parseInt(jerseyAnswer) !== jerseyNumber) && (i === 3)) {
    alert('Sorry, ' + userName + '. You ran out of attempts');
  } else if (parseInt(jerseyAnswer) === jerseyNumber) {
    alert('That is correct!');
    break;
  } else if (parseInt(jerseyAnswer) > jerseyNumber) {
    alert('That is too high... Try again!');
  } else if (parseInt(jerseyAnswer) < jerseyNumber) {
    alert('That is too low... Try again!');
  }
}

var states = ['west virginia', 'california', 'louisiana', 'ohio', 'washington']

for (var i = 0; i < 6; i++) {
  var stateAnswer = prompt('Name a state that I have worked in.');
  if ((i === 5) && ((-1) === states.indexOf(stateAnswer.toLowerCase()))) {
    alert('Sorry, you ran out of attempts. ' + states.toString());
    console.log(stateAnswer.toLowerCase())
  } else if ((-1) !== states.indexOf(stateAnswer.toLowerCase())) {
    alert('Your are correct! [' + states.toString() + ']');
    console.log(stateAnswer.toLowerCase())
    break;
  } else if ((-1) === states.indexOf(stateAnswer.toLowerCase())){
    alert('Never worked there... Try again!');
    console.log(stateAnswer.toLowerCase());
  }
}
