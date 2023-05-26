var fact=1;
var n=parseInt(prompt("Find the factorial upto:"));
for(let i=1;i<=n;i++)
	{
		fact*=i
		document.write("Factorial of"+" "+i+" "+"is"+" "+fact);
		document.write("<br>");
	}