let myArray = ['tomatoes', 'chick peas', 'onions', 'rice', 'black beans'];
let list = document.createElement('ul');
const section = document.querySelector('section');
section.appendChild(list);

for(let i = 0; i < myArray.length; i++){
    let listElement = document.createElement('li');
    listElement.textContent = myArray[i];
    list.appendChild(listElement);
}