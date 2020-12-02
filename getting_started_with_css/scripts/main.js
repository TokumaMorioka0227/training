let myImage = document.querySelector('img');

myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/human.jpg'){
        myImage.setAttribute('src', 'images/human-angry.jpg');
    }else{
        myImage.setAttribute('src', 'images/human.jpg');
    }
}