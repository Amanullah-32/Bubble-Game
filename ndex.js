 function clu(){
 var clutter = "";

for (var i = 1; i <= 76; i++) {
   var rnm = Math.floor(Math.random()*10)
   clutter += `<div class="bubble">${rnm}</div>`;
    
}
document.querySelector("#pbtm").innerHTML = clutter;
}
var rn;
var scoure = 0;
var hitrn = 0;

function getHit(){
   rn = Math.floor(Math.random()*10);
   document.querySelector(".hits").textContent = rn;
}
function scoures() {
   scoure += 10;
   document.querySelector(".scu").textContent = scoure;
}



var timer = 60;
function runtimer(){
   var tem = setInterval(() => {
      if (timer>0) {
         timer--;
         document.querySelector(".time").textContent = timer;
      }else{
clearInterval("tem");
document.querySelector("#pbtm").innerHTML = `<h1>game over<h1>`;
      }
   }, 1000);
}
document.querySelector("#pbtm").addEventListener("click",function (dets) {
  var clicknm = Number(dets.target.textContent);
  if(clicknm === rn){
   scoures();
   getHit();
   clu();
  }
} )

runtimer();
getHit();
clu();
