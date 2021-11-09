
let button = document.getElementById("button");
button.addEventListener("click", handler);

function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let swap = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = swap;
            }
        }
    }
    return arr;
}

function createAray(){
  arr = [];
  n = document.getElementById('len').value;
  n = Number(n);
  for(let i = 0; i<n;i++){
    arr.push(parseInt(Math.random()*10));
  }
  return arr;
}

function minAray(arr1, arr2){
  let min = Infinity;
  for (let i = 0; i < arr1.length - 1; i++) {
    let tempMin = arr1[i];
    for (let j = 0; j < arr2.length - 1; j++) {
      if(arr2[j] == tempMin && tempMin < min){
        min = tempMin;
        break;
      }
    }
  }
  return min;
}

function handler(){
  let body = document.querySelector("body");
  let elem1 = document.createElement("p");
  let elem2 = document.createElement("p");
  let elem3 = document.createElement("p");
  let elem4 = document.createElement("p");
  let elem5 = document.createElement("p");
  let elem6 = document.createElement("p");

  let arr1 = createAray();
  console.log(`arr1 : ${arr1}`);

  let elemText1 = document.createTextNode(`arr1 : ${arr1}`);
  elem1.appendChild(elemText1);
  body.appendChild(elem1);

  let arr2 = createAray();
  console.log(`arr2 : ${arr2}`);

  let elemText2 = document.createTextNode(`arr2 : ${arr2}`);
  elem2.appendChild(elemText2);
  body.appendChild(elem2);

  let min = minAray(arr1);
  console.log(`min = ${min}`);

  let elemText3 = document.createTextNode(`min = ${min}`);
  elem3.appendChild(elemText3);
  body.appendChild(elem3);

  arr1 = bubbleSort(arr1);
  console.log(`arr1 sort : ${arr1}`);

  let elemText4 = document.createTextNode(`arr1 sort : ${arr1}`);
  elem4.appendChild(elemText4);
  body.appendChild(elem4);

  arr2 = bubbleSort(arr2);
  console.log(`arr2 sort : ${arr2}`);

  let elemText5 = document.createTextNode(`arr2 sort : ${arr2}`);
  elem5.appendChild(elemText5);
  body.appendChild(elem5);

  console.log("------------");

  let elemText6 = document.createTextNode("------------");
  elem6.appendChild(elemText6);
  body.appendChild(elem6);
}
