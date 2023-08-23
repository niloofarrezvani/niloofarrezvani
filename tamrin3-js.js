let x = prompt("write a number:");

for(let a=1; a <= x ; a++){
    for(let b=a; b <= x;b++ ){
        for(let c=b; c <= x; c++){
            if(a**2 + b**2 ===c**2){
                console.log(a,b,c)
            }
        }
}
}
    
