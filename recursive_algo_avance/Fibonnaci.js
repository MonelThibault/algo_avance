
console.log(fibonnaccize(4))
function fibonnaccize (n){
    if(n <= 1){
        return n
    }
    else {
        return fibonnaccize(n - 1) + fibonnaccize (n - 2)
    }
}