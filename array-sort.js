// const numbers = [ 5, 2, 4, 9, 7, 1, 3, 6 ];
// const sortNumbers = numbers.sort();
// const sortReversr = numbers.reverse();
// console.log(sortReversr);

const friendsName = ["Amir","Mukit","Maruf","Rocky","Zulzana","yasin"];

// const sortArray = friendsName.sort();
// const sortArray = friendsName.reverse();
const shortReverseFriends = friendsName.sort().reverse();
// console.log(sortArray)
// console.log(shortReverseFriends);

// const numbers = [ 5, 2, 4, 9, 7, 1, 3, 6 ];
// const sortReversrNumbers = numbers.sort().reverse();

// console.log(sortReversrNumbers);

// const numbersSort = numbers.sort();
// console.log(numbersSort);

const numbers = [ 25, 22, 45, 76, 23, 30, 71, 91, 81, 26, 61, 50, 10 ];

const sortBiggestNumbers = numbers.sort(function (a, b){
    return a - b;
});

console.log(sortBiggestNumbers)

