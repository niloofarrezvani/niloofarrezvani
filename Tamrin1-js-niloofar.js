let num = prompt("write a number");
let primNum =true
    for (let i=2; i <= Math.sqrt(num) ;i++)
    {if(num % i ===0)
        {primNum = false; 
        break;}
        }
        if (primNum){
            alert(num +" is prime number")
        }
else{
    alert(num+" isn't prime number")
}


