const tab = [3, 9, 7, 1, 6, 2, 8, 4]

console.log("Original Tab : ")
console.table(tab)
insertionSort(tab)
console.log("Sorted Tab : ")
console.table(tab)

function insertionSort(tab) {
    let size = tab.length;
    for (let i = 1; i < size; i++) {
        let current = tab[i];
        let j = i-1;
        while ((j > -1) && (current < tab[j])) {
            tab[j+1] = tab[j];
            j--;
        }
        tab[j+1] = current;
    }
    return tab;
}
