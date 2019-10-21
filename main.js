// Basic Requirments

// A - 1

var animal = 'monkey';
var monkey = 'animal';
var x = 15;
var y = 10;
var maybe = 'y3ni?';
var isGood = false;
var isTenEven = 10 % 2 === 0;

// A - 2

var firstName = 'Abdelsalam';
var lastName = 'Shahlol';
var middleName = 'Abdelhamid';
var fullName = firstName + ' ' + middleName + ' ' + lastName;

// A - 3

var x = 5;
x + 10;
x;
// => 15 

var x = 17;
x = (x + 1) / 2;
x * 4;
x;
// => 9

var x = 5;
var y = 20;
x = y;
y = y + 7;
x;
// => 27

var x = 10;
var y = 5;
x = (x * 4) - 3;
x + 17;
x = x + y;
x;
// => 42

// A - 4

var c = 1;

function counter() {
    return c++;
}

// More Practice

// A - 1
// The upper bound was repeated 3 times
// 3 changes

var upperBound = 5;
function guessMyNumber(n) {
    if (n > upperBound) {
        return 'Out of bounds! Please try a number between 0 and ' + upperBound + '.';
    } else if (n === randInt(upperBound)) {
        return 'You guessed my number!';
    }
    return 'Nope! The correct number was: ' + n;
}

function randInt(n) {
    return Math.floor(Math.random() * (n + 1));
}

// A - 2

var upperBound = 5;
var randomInt = randInt(upperBound);
function guessMyNumber(n) {
    if (n > upperBound) {
        return 'Out of bounds! Please try a number between 0 and ' + upperBound + '.';
    } else if (n === randomInt) {
        return 'You guessed my number!';
    }
    return 'Nope! The correct number was: ' + randomInt;
}

// A - 3

var nTimes = 1;
var upperBound = 5;
var randomInt = randInt(upperBound);

function guessMyNumber(n) {
    if (n > upperBound) {
        ++nTimes;
        return 'Out of bounds! Please try a number between 0 and ' + upperBound + '.';
    } else if (n === randomInt) {
        if (nTimes === 1) {
            return 'You guessed my number in 1 guess.';
        }
        return 'You guessed my number in ' + nTimes + ' guesses';
    }
    ++nTimes;
    return 'Nope! The correct number was: ' + randomInt;
}

// A - 4

var nTimes = 1;
var upperBound = 5;
var randomInt = randInt(upperBound);
var limit = 5;

function guessMyNumber(n) {
    if (nTimes < limit) {
        if (n > upperBound) {
            ++nTimes;
            return 'Out of bounds! Please try a number between 0 and ' + upperBound + '.';
        } else if (n === randomInt) {
            if (nTimes === 1) {
                return 'You guessed my number in 1 guess.';
            }
            return 'You guessed my number in ' + nTimes + ' guesses';
        }
        ++nTimes;
        return 'Try again. ' + (limit - nTimes + 1) + ' left!';
    } else {
        return 'Game over! The correct number was: ' + randomInt;
    }
}

// A - 5

var nTimes = 1;
var upperBound = 5;
var randomInt = randInt(upperBound);
var limit = 5;
var highScore = 0;

function guessMyNumber(n) {
    if (nTimes < limit) {
        if (n > upperBound) {
            ++nTimes;
            return 'Out of bounds! Please try a number between 0 and ' + upperBound + '.';
        } else if (n === randomInt) {
            highScore = nTimes;
            if (nTimes === 1) {
                return 'You guessed my number in 1 guess.';
            }
            return 'You guessed my number in ' + nTimes + ' guesses';
        }
        ++nTimes;
        return 'Try again. ' + (limit - nTimes + 1) + ' left!';
    } else {
        return 'Game over! The correct number was: ' + randomInt;
    }
}
