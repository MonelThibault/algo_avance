const tab = [3, 9, 7, 1, 6, 2, 8, 4]

console.log("Original Tab : ")
console.table(tab)
selectionSort(tab)
console.log("Sorted Tab : ")
console.table(tab)

function selectionSort(tab) {
    let size = tab.length;
    for(let i = 0; i < size; i++) {
        // Finding the smallest number in the subarray
        let minPos = i;
        for(let j = i+1; j < size; j++){
            if(tab[j] < tab[minPos]) {
                minPos=j;
            }
        }
        if (minPos !== i) {
            // Swapping the elements
            let tmp = tab[i];
            tab[i] = tab[minPos];
            tab[minPos] = tmp;
        }
    }
    return tab;
}