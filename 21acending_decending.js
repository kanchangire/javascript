// 021. Write a program to accept three numbers from user and print them in ascending and descending order in C language

var a=20,b=30,c=50;

if((a>=b)&&(a>=c))
{
    if(b>=c)
    {
        console.log("\n Descending order : %d %d %d",a,b,c);
        console.log("\n Ascending order : %d %d %d",c,b,a);
    }
    else
    {
        console.log("\n Descending order : %d %d %d",a,c,b);
        console.log("\n Ascending order : %d %d %d",b,c,a);
    }
}
else if((b>=a)&&(b>=c))
{
    if(a>=c)
    {
        console.log("\n Descending order : %d %d %d",b,a,c);
        console.log("\n Ascending order : %d %d %d",c,a,b);
    }
    else
    {
        console.log("\n Descending order : %d %d %d",b,c,a);
        console.log("\n Ascending order : %d %d %d",a,c,b);
    }
}
else if((c>=a)&&(c>=b))
{
    if(a>=b)
    {
        console.log("\n Descending order : %d %d %d",c,a,b);
        console.log("\n Ascending order : %d %d %d",b,a,c);
    }
    else
    {
        console.log("\n Descending order : %d %d %d",c,b,a);
        console.log("\n Ascending order : %d %d %d",a,b,c);
    }
}