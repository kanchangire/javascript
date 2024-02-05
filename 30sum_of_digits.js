// 030. Write a Program to accept a number and print sum of it’s digits in C language

var rem,sum=0,n=5678;
  
  while(n>0)
  {
     rem=n%10;
     sum=sum+rem;
     n=n/10;
  }
  console.log("Sum of digits....%d",sum);
