function  c()
{
    console.log("Button is clicked");//print this statement
    document.getElementById('click').innerText="I am clicked";//text changed in button
    document.getElementById('click').style.background="red";//color is changed
    
}
let prev;
let n=document.getElementById('click');
let p = document.getElementById('para');

let d = document.getElementById('con');
// we can write above line like this
// document.querySelector('.div')[0]. if you want to access class

prev=p.innerText;
// addEventListener only applicable for the id wala function
d.addEventListener('mouseup',function()
{
    p.innerText=prev;
})
d.addEventListener('mousedown',function()
{
    p.innerText="I am mousedown event";
})

