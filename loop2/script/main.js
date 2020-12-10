let name = 'Mustafa';
let i = 0;

let phonebook = [
    { name : 'Chris', number : '1549' },
    { name : 'Li Kang', number : '9634' },
    { name : 'Anne', number : '9065' },
    { name : 'Francesca', number : '3001' },
    { name : 'Mustafa', number : '6888' },
    { name : 'Tina', number : '4312' },
    { name : 'Bert', number : '7780' },
    { name : 'Jada', number : '2282' },
]

let section = document.querySelector('section');

while(i < phonebook.length){
    let para = document.createElement('p');
    if(phonebook[i].name === name){
        para.textContent = phonebook[i].name + " : " + phonebook[i].number;
        section.appendChild(para); 
    }
    i++;
}