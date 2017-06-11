var n=Number(prompt("Enter the ticket number"));
var count = 0;
if (0<=n&&n<=9999)
 {
  while (n>0) 
   {
    var temp = n % 10;
      if (temp/5==1)
      {
        count++;
      }
    n = parseInt(n/10);
   }
  console.log(count);
}
else 
  {
    console.log ("Re-enter the ticket number");
  }