const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */
let i;
for(i = 1; i <= 5; i++){
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `./images/pic${i}.jpg`);
    newImage.setAttribute("class", ".image-selected")
    thumbBar.appendChild(newImage);
    newImage.onclick = function (e){
        displayedImage.setAttribute("src", e.target.getAttribute("src"));
    }
}

/* Wiring up the Darken/Lighten button */
btn.onclick = turning;

function turning(){
    if(btn.getAttribute("src") === "dark"){
        btn.setAttribute("src", "light");
        btn.textContent = "Lighten";
        overlay.setAttribute("style", "background: rgba(0, 0, 0, 0.5);");
    }else{
        btn.setAttribute("src", "dark");
        btn.textContent = "Darken";
        overlay.setAttribute("style", "background: rgba(0, 0, 0, 0);")
    }
}