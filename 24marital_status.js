// 024. Write a Program to accept user’s marital status, gender and age to check if he/she is eligible for marriage or not.

var age=17;
var MaritalStatus,Gender;
     if(MaritalStatus=='m')
   {
    console.log("You can not marry!");
   }
   else if(MaritalStatus=='u')
   {
    if(Gender=='m')
    {
      if(age>=21)
          console.log("You can marry!");
      else
          console.log("You can not marry!");
    }
    else if(Gender=='f')
    {
      if(age>=18)
          console.log("You can marry!");
      else
          console.log("You can not marry!");
    }
    else
          console.log("Invalid input Gender");
   }
   else
console.log("Invalid input Marital Status ");