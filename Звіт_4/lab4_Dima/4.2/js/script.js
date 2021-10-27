let button = document.getElementById("addClock12");
button.addEventListener("click", addClock);

let buttonDelete = document.getElementById("deleteClock");
buttonDelete.addEventListener("click", deleteClock)
let buttonOff = document.getElementById("offClock");

function addClock(){
  let form = document.getElementsByName('clock')[0];
  let newForm = form.cloneNode(true);
  let element = document.querySelector('center');
  let firstElem = newForm.querySelector('H3');
  let secondElem = newForm.querySelector('input');
  newForm.removeChild(firstElem);
  newForm.removeChild(secondElem);
  element.appendChild(newForm);
  newForm.style.margin = "25px 5px";
  let timer=null, timerrun=false;
  starttime();
}

function deleteClock(){
  let center = document.querySelector('center');
  let form = document.getElementsByName('clock');
  if(form.length > 2)
    center.removeChild(form[form.length-1]);
  else
    alert("Цей будильник не можливо очистити!!!");
}

 let timer=null, timerrun=false;
 let clock = document.getElementsByName('clock');
 let inps = clock[0].querySelectorAll('input');
 inps[1].focus();
 function moveFocus(el) {
     if(el.value.length == 2){
         if(el.nextElementSibling)
            el.nextElementSibling.focus();
         else
             el.blur();
     }
 }
 for(let i = 1; i < inps.length; i++)
         inps[i].addEventListener('keyup', () => moveFocus(inps[i]));

function stoptime() {
    if(timerrun)
        clearTimeout(timer);
    timerrun=false;
}
function starttime() {
    stoptime();
    showtime();
}
function showtime() {
    var all=new Date();
    var year = all.getFullYear();
    var month = all.getMonth();
    var day = all.getDate();
    var hours=all.getHours();
    var minutes=all.getMinutes();
    var seconds=all.getSeconds();
    var datavalue =" " + day + ".";
    datavalue += (month+1) + ".";
    datavalue += year;
    var timevalue=datavalue + " " + hours;
    timevalue += ((minutes<10) ? " :0" : " : ") + minutes;
    timevalue += ((seconds<10) ? " :0" : " : ") + seconds;
    for(let i = 0; i < clock.length; i++){
      document.clock[0].next.value=timevalue;
      if (document.clock[i].next1.value == hours && document.clock[i].next2.value == minutes && document.clock[i].next3.value == seconds && document.clock[i].next4.value == day && document.clock[i].next5.value == month + 1)
          alert("Wake up!!!");
    }
    timer=setTimeout('showtime()',1000);
    timerrun=true;
}
