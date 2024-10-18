function swapElements<T>(arr: T[], idx1: number, idx2: number){
    if(idx1 > 0 && idx2 > 0 && idx1 < arr.length && idx2 < arr.length){
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    }
    return arr;
}


const numbers = [1, 2, 3, 4, 5];
console.log(swapElements(numbers, 1, 3));