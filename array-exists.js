function megaFriend(friends){
    if(Array.isArray(friends) == false){
        return "Please Provide an Array"
    }
    let arr = friends[0];

    for( const friend of friends ){

        if( friend.length > arr.length ){

            arr = friend;
        }

    }

    return arr;

}

const friends = ["maruf","hassan","rocky","mukit","shuieb"];
// const result = megaFriend(friends);
// console.log(result);


// index of Using for find element
if( friends.indexOf('hassan') != -1 ){
    // console.log("Hassan Is Here");
}


// include Using check Elemnet existing
if(friends.includes('hassan')){
    console.log("Hassan is Here Seriusly");
}

// concat 

const fist = [ 22, 2, 58, 54, 55, 59, 71, 655 ];
const second = [ 411, 15, 596, 21, 11, 52, 64 ];

const conCat = fist.concat(second);
console.log(conCat);