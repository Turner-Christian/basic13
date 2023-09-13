// print 1 -> 255
function twoFiftyFive() {
    for (var i = 1; i <= 255; i++) {
        console.log(i);
    }
    return;
}
// twofiftyfive()

// print sum 0 -> 255
function printSum() {
    let sum = 0;
    for (var i = 0; i <= 255; i++) {
        console.log(i);
        sum += i;
        console.log(sum)
    }
    return sum;
}
// printSum();

//find and print max
function printMax(arr) {
    let max = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    console.log(max);
    return max;
}
// printMax([1, 2, 34, 5, 6])

// array with odds
function arrayWithOdds() {
    arr = [];
    for (var i = 1; i <= 255; i++) {
        if (i % 2 != 0) {
            arr.push(i);
        }
    }
    console.log(arr);
    return arr;
}
// arrayWithOdds();


// greater than y 
function greaterThanY(arr, y) {
    count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > y) {
            count++;
            console.log(arr[i]);
        }
    }
    return count;
}
// greaterThanY([1, 2, 3, 4], 1)

// max, min. avg
function mma(arr) {
    let min = arr[0];
    let max = 0;
    let total = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
        if (arr[i] > max) {
            max = arr[i];
        }
        total += arr[i];
    }
    console.log('min: ' + min, ' max: ' + max);
    console.log('avg: ', (total / arr.length))
    return total / arr.length
}
// mma([1, 2, 3, 4, 5, 6])

// swap string for array negative values
function negSwap(arr) {
    let newArr = []
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            newArr.push('Dojo')
        } else {
            newArr.push(arr[i]);
        }
    }
    return newArr
}
// console.log(negSwap([1, 2, -3, 4, -5, 0]))

// print odds 1-255
function printOdds() {
    for (var i = 1; i <= 255; i++) {
        if (i % 2 != 0) {
            console.log(i);
        }
    }
}
// printOdds();

// iterate and print array
function iterateAndPrint(arr) {
    for(var i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}
// iterateAndPrint([1, 2, 3])

// get and print average
function getAndPrint(arr) {
    total = 0;
    for(var i = 0; i < arr.length; i++) {
        total += arr[i]
    }
    console.log('avg: ', total / arr.length)
}
// getAndPrint([1, 2, 3 ,4 ,5, 6])

// square the values 
function squareTheValues(arr) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * arr[i]
    }
    return arr
}
// console.log(squareTheValues([2, 3, 4, 5]))