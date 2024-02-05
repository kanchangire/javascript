function swapping(a,b){
    let temp=a;
    a=b;
    b=temp;
    return [a,b];
}
let swap=swapping(10,20);
console.log(swap);


function swapingfirst(c, d) {
    return [c,d]; 
}
let swapp = swapingfirst(10, 20);
console.log(swapp);

