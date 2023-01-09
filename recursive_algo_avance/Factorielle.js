console.log(factorize(5))

function factorizeFailed(n) {
    let nMinus = n - 1
    let total = 0
    while (nMinus !== 0) {
        total += (n * nMinus)
        nMinus--
    }
    return total
}

function factorize(n) {
    // Même code qu'en dessous mais dans l'autre sens
    // if (n !== 0) {
    //     return n * factorize(n - 1)
    // } else {
    //     return 1
    // }
    if (n === 0) {
        return 1
    } else {
        return n * factorize(n - 1)
    }
}

// n * factorize(n * factorize(n * 1))
// 3 * f(3 * (3 - 1))
//
// f(3) = 3 * f(3 - 1)  // 6
// f(3) = 3 * f(2)  // 6
// f(3) = 3 * (f(f(2 * f(2-1)))) // 2
// f(3) = 3 * (f(f(2 * f(1))))    // 2
// f(3) = 3 * (f(f(2 * f(f( 1 * f(1-1))))))    //1
// f(3) = 3 * (f(f(2 * f(f( 1 * f(0))))))     // 1
// f(3) = 3 * (f(f(2 * f(f( 1 * 1)))))     // 1