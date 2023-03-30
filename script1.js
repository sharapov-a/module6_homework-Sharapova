function CountEvenOdd() {
  
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'null', 'apple']; 
let countEven = 0;
let countOdd = 0;
let countStr = 0;
  
  for (let i = 0; i < arr.length; i++){
    if (typeof(arr[i]) != 'number') {
        countStr++;
    } else {
        if (arr[i] % 2 === 0) {
            countEven++;
        } else {
            countOdd++;
        }
    }
}
console.log("Even is " + countEven);
console.log("Odd is " + countOdd);
console.log("Other is " + countStr);
}