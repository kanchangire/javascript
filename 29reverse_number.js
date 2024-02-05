// 029. Write a Program to accept a number and print the number in reverse order. E.g. if 1324 is the number then the output will be 4231 in C language

var rev,rem,num=1324,ori;
ori=num;
while(num!=0)
{
    rem=num%10;
    rev=rev*10+rem;
    num=num/10;
    console.log("%d",rev);
}
 