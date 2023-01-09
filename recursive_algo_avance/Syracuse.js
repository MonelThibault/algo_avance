
console.log(syracusize(15))

function syracusize(n) {
    if (n === 1) {
        return n
        //Check if number is even
    } else if (n % 2 === 0) {
        console.log(n)
        return syracusize(n / 2)
    }
    else{
        console.log(n)
        return syracusize(n * 3 +1)
    }
}