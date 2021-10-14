// Starting array
// Paired with Christian Colson
let array = [28, 43, -12, 30, 4, 0, -36]

// Write your solution below:

findMin = (array) => {
    let min = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i]
        }
    }
    return min
}

findMax = (array) => {
    let max = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i]
        }
    }
    return max
}


console.log("Min:", findMin(array))
console.log("Max:", findMax(array))

console.log("Min():", Math.min(...array))
console.log("Max():", Math.max(...array))