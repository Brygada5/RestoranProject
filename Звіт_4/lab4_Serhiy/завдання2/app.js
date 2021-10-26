function plus(){
  var num1,num2,result;
    num1=document.getElementById('number1').value;
    num1=parseInt(num1);
    num2=document.getElementById('number2').value;
    num2=parseInt(num2);
    result=num1+num2;
    document.getElementById('output').innerHTML=result;
}
function minus(){
  var num1,num2,result;
    num1=document.getElementById('number1').value;
    num1=parseInt(num1);
    num2=document.getElementById('number2').value;
    num2=parseInt(num2);
    result=num1-num2;
    document.getElementById('output').innerHTML=result;
}
function multiplication(){
  var num1,num2,result;
    num1=document.getElementById('number1').value;
    num1=parseInt(num1);
    num2=document.getElementById('number2').value;
    num2=parseInt(num2);
    result=num1*num2;
    document.getElementById('output').innerHTML=result;
}
function relation(){
  var num1,num2,result;
    num1=document.getElementById('number1').value;
    num1=parseInt(num1);
    num2=document.getElementById('number2').value;
    num2=parseInt(num2);
    result=num1/num2;
    document.getElementById('output').innerHTML=result;
}
function remainder(){
  var num1,num2,result;
    num1=document.getElementById('number1').value;
    num1=parseInt(num1);
    num2=document.getElementById('number2').value;
    num2=parseInt(num2);
    result=num1%num2;
    document.getElementById('output').innerHTML=result;
}
function radical(){
  var num1,num2,result;
    num1=document.getElementById('number1').value;
    num1=parseInt(num1);
    num2=document.getElementById('number2').value;
    num2=parseInt(num2);
    result=Math.pow(num1+num2,0.5);
    document.getElementById('output').innerHTML=result;
}
function power(){
  var num1,num2,result;
    num1=document.getElementById('number1').value;
    num1=parseInt(num1);
    num2=document.getElementById('number2').value;
    num2=parseInt(num2);
    result=Math.pow(num1,num2);
    document.getElementById('output').innerHTML=result;
}
