
console.log(PGCDize(4, 12))

function PGCDize (n1, n2){
    if( n2 === 0){
        return n1
    }
    else {
        return PGCDize(n2, n1 % n2)
    }
}