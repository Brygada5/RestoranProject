// создвем массив
let number = prompt('input number of elements in array:', 0);
let myArray = [];
for(let i=0; i<number;i++)
{
    myArray[i] = Math.floor(Math.random()*100);
}
console.log(myArray);


function swap(items, firstIndex, secondIndex){
    const temp = myArray[firstIndex];
    myArray[firstIndex] = myArray[secondIndex];
    myArray[secondIndex] = temp;
}

function partition(myArray, left, right) {
    let pivot = myArray[Math.floor((right + left) / 2)];
    let i = left;
    let j = right;
    while (i <= j) {
        while (myArray[i] < pivot) {
            i++;
        }
        while (myArray[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(myArray, i, j);
            i++;
            j--;
        }
    }
    return i;
}

function quickSort(myArray, left, right)
{
    let index;
    if (myArray.length > 1)
    {
        index = partition(myArray, left, right);
        if (left < index - 1)
        {
            quickSort(myArray, left, index - 1);
        }
        if (index < right)
        {
            quickSort(myArray, index, right);
        }
    }
    return myArray;
}

let result = quickSort(myArray, 0, myArray.length - 1);
console.log(result);


let sumValue = 0;

function sum(arr) {
    for(let i=0; i < arr.length; i++)
    {
      if ((arr[i] == Math.min.apply(Math, arr)) || (arr[i] == Math.max.apply(Math, arr))) {sumValue += 0}
      else  sumValue += arr[i];
    }
    console.log(sumValue);
    return sumValue;
}

sum(result);
