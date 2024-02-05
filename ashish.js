// var number =12;
// for(var i=1;i<=number.length;i++){
//     var flag=0;
//     if(number%1==0 || number%number==0){
//         flag++

//     }
//     if(flag==0){
//         console.log('prime')
//     }else{
//         console.log('not prime')
//     }
// }



let number = 13;
let flag = 0;

for (let i = 2; i < number; i++) {
    if (number % i === 0 ) {
        flag ++;
        break;
    }
}

if (flag === 0) {
    console.log('prime');
} else {
    console.log('not prime');
}
