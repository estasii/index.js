let number =null
let choise= 3

while(choise>0){
 alert('You have '+choise+'choise')
number=prompt('Enter number')
if(number>15 && number<35 && number%6===0){
    alert('Nice')
    break;
} 
choise--;
if(choise===1){
    alert('No chanse')
}  
}


let number = 0
let choise = 3
for (let i = 0; i= < infinity; i++) {
    number=promt('Enter number')
    if(number>15 && number<35 && number%6===0){
        alert('Number is valid')
        break;
    }

    choise= choise-1
    alert('you have '+ choise+ 'choise')
    if(choise===0){
        alert('user have not choise')
        break;
    }
alert('Number incorrect')
}
