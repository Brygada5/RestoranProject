function massifs(){
  var arrA=[];
  var n=document.getElementById('numbers').value;
  n=parseInt(n);
  for ( var i = 0; i < n; i++ ) {

  arrA.push(parseInt(Math.random()*100));


}
console.log(arrA);
let max = Math.max.apply(Math, arrA);
console.log(max);
var arrB=[];
for ( i = 0; i < n; i++ ) {
var b = max*arrA[i];
arrB.push(b);
}
var arrC=insertionSort(arrB);
console.log(arrC);


}

function insertionSort(inputArr) {
    let n = inputArr.length;
        for (let i = 1; i < n; i++) {
            // Choosing the first element in our unsorted subarray
            let current = inputArr[i];
            // The last element of our sorted subarray
            let j = i-1;
            while ((j > -1) && (current > inputArr[j])) {
                inputArr[j+1] = inputArr[j];
                j--;
            }
            inputArr[j+1] = current;
        }
    return inputArr;
}
