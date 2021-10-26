function GenerateArray() {
    var array = [];
    var length = document.getElementById('field').value;
    length = parseInt(length);
    for (var i = 0; i < length; i++) {
        array.push(parseInt(Math.random() * 100));
    }
    return array;
}

function myscript() {
    var array = GenerateArray();
    console.log('Input array: ');
    console.log(array);

    var maxIndex = MaxEvenNumInd(array);
    console.log('Maximum even number:');
    console.log(array[maxIndex]);

    var minIndex = MinEvenIndexNumInd(array);
    console.log('Minimum number with even index:');
    console.log(array[minIndex]);

    [array[minIndex], array[maxIndex]] = [array[maxIndex], array[minIndex]];
    console.log('Array with swapped numbers:');
    console.log(array);

    array = InsertionSort(array);
    console.log('Sorted array:');
    console.log(array);
}

function MaxEvenNumInd(arr) {
    var max = -1;
    var maxIndex;
    for (var i = 0; i < arr.length; i++) {
        if (IsEven(arr[i]) && arr[i] > max) {
            max = arr[i];
            maxIndex = i;
        }
    }
    return maxIndex;
}

function MinEvenIndexNumInd(arr) {
    var min = 101;
    var minIndex;
    for (var i = 0; i < arr.length; i++) {
        if (IsEven(i) && arr[i] < min) {
            min = arr[i];
            minIndex = i;
        }
    }
    return minIndex;
}

function IsEven(number) {
    if (number % 2 == 0)
        return true;
    else
        return false;
}

function InsertionSort(array) {
    var n = array.length;
    for (var i = 0; i < n; i++) {
        var v = array[i], j = i - 1;
        while (j >= 0 && array[j] > v) {
            array[j + 1] = array[j]; j--;
        }
        array[j + 1] = v;
    }
    return array;
}