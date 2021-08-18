/* const products = [
    'Dell hardCore i29 200GB laptop',
    'iphone 1TB camera flashlight phone',
    'yellow laptop with black camera',
    '1X59 Lenovo commercial Yoga laptop',
    'LG super nova Laptop',
    'Htc low Price Phone',
    'purple Color with phone'
]
 */
// const searching = 'laptop';

// indexof
/* 
const output = [];

for( let product of products ){
    if( product.toLowerCase().indexOf( searching.toLowerCase() ) != -1 ){
        output.push(product)
    }
} */
// console.log(output)

/*Const anthem = "Amr sonar Bangla Ami tomai Bhalo Basi";
anthem.includes("Bhalo");

console.log(anthem) */

const products = [

    'Dell hardCore i29 200GB laptop',
    'iphone 1TB camera flashlight phone',
    'yellow laptop with black camera',
    '1X59 Lenovo commercial Yoga laptop',
    'Dell LG super nova Laptop',
    'Htc low Price Phone',
    'Dell purple Color with phone'

];
const searching = 'Dell';
const output = [];

for( const product of products ){
   // if( product.toLowerCase().includes(searching.toLowerCase()) ){
        // output.push(product);
   // }
}

// console.log(output)

for( const product of products ){
    if( product.toLowerCase().startsWith(searching.toLowerCase()) ){
        output.push(product)
    }
}
console.log(output)