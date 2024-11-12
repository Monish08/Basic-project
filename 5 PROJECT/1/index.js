const body=document.getElementsByTagName("body")[0];

function colorchange(color)
{
    body.style.backgroundColor=color;
    
}
function random()
{
    const red=Math.round(Math.random()*255);
    const green=Math.round(Math.random()*255);
    const blue=Math.round(Math.random()*255);
    const c=`rgb(${red},${green},${blue})`;
    body.style.backgroundColor=c;
}