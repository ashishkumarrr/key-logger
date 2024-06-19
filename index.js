const firstd=document.getElementsByClassName("first");
const secondd=document.getElementsByClassName("second")

const startd=document.getElementsByClassName("start");
const stopd=document.getElementsByClassName("stop");

startd.addEventListener("click",()=>{
    document.addEventListener("keydown",handledown);
    document.addEventListener("keyup",handleup);
    startd.disabled=true;
})

stopd.addEventListener("click",()=>{
    document.removeEventListener("keydown",handledown);
    document.removeEventListener("keyup",handleup);
    firstd.textContent= "";
    secondd.textContent="";
})

function handledown(e){
    firstd.textContent=`key ${e.key} pressed down`;
    secondd.textContent="key is down"
}
function handleup(e){
    firstd.textContent=`key ${e.key} pressed up`;
    secondd.textContent="key is up"
}