let type = document.querySelector('.type');
let btn_1 = document.querySelector('.btn-1');
let btn_2 = document.querySelector('.btn-2');


btn_1.addEventListener('click', function(){


    type.type = "text";
    btn_1.style.display = 'none';
    btn_2.style.display = 'block';

});



btn_2.addEventListener('click', function(){


    type.type = "password";
    btn_2.style.display = 'none';
    btn_1.style.display = 'block';

});



let parentBox = document.querySelector('.parent_box');
let childBox = document.querySelector('.child_box');


window.addEventListener('scroll', function(){
    let height = document.documentElement.scrollHeight;
let clintHeight = document.documentElement.clientHeight;
let fromTop = document.documentElement.scrollTop;

let sub = height - clintHeight;
let result = Math.round((fromTop * 100)/ sub);

parentBox.style.backgroundImage = `conic-gradient(orange ${result}%, #2c3e50 ${result}%)`;
childBox.innerHTML = result;
});

console.log(height);