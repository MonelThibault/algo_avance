const tab = [3, 9, 7, 1, 6, 2, 8, 4]
let i = 0
let j = 1
let Li = 0
let Mj = 0

console.log("Original Tab : ")
console.table(tab)
myFirstSort()
console.log("Sorted Tab : ")
console.table(tab)
function myFirstSort() {
    while (i !== tab.length - 1) {
        if (i === tab.length - 2) {
            if (tab[i] > tab[j]) {
                Li = tab[i]
                Mj = tab[j]
                tab[i] = Mj
                tab[j] = Li
                reset()
            } else {
                i = tab.length - 1
            }
        } else if (tab[i] > tab[j]) {
            Li = tab[i]
            Mj = tab[j]
            tab[j] = Li
            tab[i] = Mj
            reset()
        } else {
            i++
            j++
        }
    }
}
function reset() {
    i = 0
    j = 1
    Li = 0
    Mj = 0
}
