const body=document.querySelector('body');
const button=document.querySelector('button');
const colors=['blue','green','pink','yellow','violet','wheat'];

body.style.backgroundColor='wheat';
button.addEventListener('click',function(){
    const colorIndex=parseInt(Math.random()*colors.length);
    body.style.backgroundColor=colors[colorIndex];
})