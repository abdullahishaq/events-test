const btn = document.querySelector('#btn');
btn.onclick = () => alert("Hello World from DOM!");

const btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', () => {
    alert("Hello World from DOM the II");
});

//----------------------------------------------------


//Click me 1
function alertFunction() {
    alert("YAY! you DID IT!")
}

//btn3
btn3.onclick = alertFunction;

//btn4
btn4.addEventListener('click', alertFunction);


// btn.addEventListener('click', function(e) {
//     e.target.style.background = 'blue';
// });



//----------------------------------------------------

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {

    button.addEventListener('dblclick', () =>{
        alert(button.id);
    });
});