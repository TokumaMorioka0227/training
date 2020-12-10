let i = 500;
let section = document.querySelector("section");

while(i >= 2){
    let isFlag = isPrime(i);
    let para = document.createElement("p");

    if(isFlag){
        para.textContent = i;
        section.appendChild(para);
    }

    i--;
}

function isPrime(num) {
    for(let i = 2; i < num; i++) {
        if(num % i === 0) {
            return false;
        }
    }
    
    return true;
}