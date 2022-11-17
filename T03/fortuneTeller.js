//Prompts for user input
let mothersName = prompt ("What is your mother's first name?");
let streetName = prompt ("What was the name of the street where you grew up?");
let favColour = prompt ("What was your favourite colour as a child?");
let userAge = prompt ("How old are you?");
let randomNum = prompt ("Enter a number between 1 - 10:");


//Determine users fortune
let bestFriend = randomNum;
let friendName = (mothersName + " " + streetName);
let marriedYears = (userAge / randomNum);
let numChildren = (userAge % randomNum); //used freeCodeCamp tutorial online to understand remainder function
let hairDye = (userAge - randomNum);

/*test variable calculations:
console.log(bestFriend);
console.log(friendName);
console.log(Math.round(marriedYears));
console.log(numChildren);
console.log(hairDye);*/


//Output users fortune in template literal
fortune = `In ` + bestFriend + ` years you are going to meet your best friend named ` + friendName + `.
You will get married in ` + (Math.round(marriedYears)) + ` years and have ` + numChildren + ` children.
In ` + hairDye + ` years you are going to dye your hair ` + favColour + `.`;

console.log(fortune);