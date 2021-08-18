const anthem = "Amar Sonar Bangla Ami Tomai Bhalo Vasi";
const wordOfAnthem = anthem.split(' ');
const usingLetter = anthem.split('a' , 1);
const smallSlice = anthem.slice(0, 11);
const subStrLength = anthem.substr(0, 11);
const subStringLength = anthem.substring(0, 11);
// console.log(subStrLength)
// console.log(subStrLength)
// console.log(smallSlice)
// console.log(wordOfAnthem);
// console.log(usingLetter)


// Concate String

const fistName = "Maruf";
const lastName = "Mobin";
// const fullName = fistName + lastName;
// const fullName =   `${fistName} ${lastName}`;
// const fullName = fistName.concat(" Hussian ").concat(lastName);
// console.log(fullName);

// using join

const products = ['phone', 'laptop', 'camera', 'keyBoard'];

const wordsJoint = products.join(' ');

console.log(wordsJoint);
