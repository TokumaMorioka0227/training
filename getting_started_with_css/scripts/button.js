let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

if(!localStorage.getItem('name')){
    setUserName();
}else{
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozillaはすばらしいよ、' + storedName;
}

myButton.onclick = function(){
    setUserName();
}

function setUserName(){
    let myName = prompt('あなたの名前を入力してください。');
    if(!myName || myName === null){
        setUserName();
    }else{
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Mozillaはすばらしいよ、' + myName;
    }
}