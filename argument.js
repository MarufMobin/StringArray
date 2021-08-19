/* 
function addNumbers(){
    // console.log(arguments);
    // console.log(arguments[1])  

    let result = 0;
    for( const numbers of arguments ){
        result += numbers;
    }
    // const result = numberOne + numberTwo;   
    return result;
}

const sum = addNumbers(23, 13, 50, 45, 7, 11 );
console.log(sum); */



// Using argument to find number of Result in array

function getFullName(fistName, lastName){
    // const fullName = fistName + " " + lastName;
    let fullName = '';
    for( const part of arguments ){
        fullName += part + " ";
    }
    return fullName;
}

const fullName = getFullName("Md", "Maruf","Hussion","Mobin");

console.log(fullName)