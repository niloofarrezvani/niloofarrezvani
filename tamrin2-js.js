const inputName = prompt("what's your name?");

let reversedName='';
for(let i= inputName.length-1; 0<=i; i--){
    reversedName += inputName[i] ; 
    alert(reversedName)

}