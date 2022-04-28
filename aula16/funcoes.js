function fatorial (num) {
    fat = 1
    for (c = num; c > 1; c--) {
        fat *= c
    } return fat
}
// 5 x 4 x 3 x 2 x 1 

console.log(fatorial(4))