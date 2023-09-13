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