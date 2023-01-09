const tab = [3, 9, 7, 1, 6, 2, 8, 4]

console.log("Original Tab : ")
console.table(tab)
bubbleSort(tab)
console.log("Sorted Tab : ")
console.table(tab)

function bubbleSort (tab) {
    let size = tab.length;
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            if (tab[j] > tab[j + 1]) {
                let tmp = tab[j];
                tab[j] = tab[j + 1];
                tab[j + 1] = tmp;
            }
        }
    }
    return tab;
}