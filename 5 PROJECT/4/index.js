let secondlaped=3800;
let interval=null;
const clock=document.querySelector('.js-h');
function padStart(value)
{
    return String(value).padStart(2,"0");
}
function timer()
{
    const hour=Math.floor(secondlaped/3600);
    const minutes=Math.floor((secondlaped%3600)/60);
    const seconds=secondlaped%60;
    secondlaped++;
    clock.innerHTML = `${padStart(hour)}:${padStart(minutes)}:${padStart(seconds)}`;

}
function startclock()
{
    if(interval)stopclock();
    interval=setInterval(timer,1000);
}
function stopclock()
{
    clearInterval(interval);
}
function resetclock()
{
    stopclock();
    secondlaped=0;
    timer();
   

}