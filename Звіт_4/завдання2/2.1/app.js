function action(){
let d=1;
let x=0;
for (let i = 0; i < 5; i++) {
  x=prompt('Введіть число ',0);
  if (x <= 0) {
  alert("Введене число не додатнє");
  continue;
  }
  d *= Number( x);
}
alert(`Добуток дорівнює ${d}`);
}
