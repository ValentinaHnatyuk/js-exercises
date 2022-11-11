function sum(...rest) {
    let sum = 0;
    for(num of rest) {
        sum += num;
    }
    return sum;
}

console.log(sum(1, 2, 3, 4, 5));