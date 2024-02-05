// 023. Write a program to accept roll number ,and marks for three subjects, print total marks and average, also print grade by considering following conditions

var RollNumber,m1=60,m2=80,m3=90,total;
var avg;
 
 total=m1+m2+m3;
 avg=total/3.0;
 console.log("Total is....... %d",total);
 console.log("Average is..... %5.2f %",avg);
 if(avg>=60)
  console.log("Grade : A");
else if((avg>=50)&&(avg<60))
  console.log("Grade : B");
 else if((avg>=40)&&(avg<50))
  console.log("Grade : C");
 else
  console.log("Grade : F");
