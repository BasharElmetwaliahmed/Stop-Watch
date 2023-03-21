let tms=0;
var ts=0;
var interv;
 var tmsprint;
globalThis.ts;


let star=document.getElementById("sta");
let stopp=document.getElementById("stop");
let reset=document.getElementById("reset");

let ele=document.getElementsByTagName("p")[1];
star.onclick=function(){
    interva=setInterval(function(){
        if(tms<10){
      tmsprint="0"+tms.toString();
        }
        else{
            tmsprint=tms.toString()
        }
        if(tms==99){
            tms=0;
            ts+=1
        }
        tms+=1;
        if(ts<10){
            ele.innerHTML=`0${ts}:${tmsprint}`}
          
            else{
                ele.innerHTML=`${ts}:${tmsprint}`
            }
    },10)
}

stopp.onclick=(function(){
  clearInterval(interva)
})
reset.onclick=(function(){
    clearInterval(interva)
    ts=0;
    tms=0;
    ele.innerHTML=`0${ts}:00`

})
