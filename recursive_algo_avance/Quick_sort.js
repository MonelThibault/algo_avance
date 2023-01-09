function swap(arr, i, j) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}
function quicksort(arr, first, last) {
    if (first < last) {
        let pi = partition(arr, first, last) // pi : partition index
        quicksort(arr, first, pi - 1)
        quicksort(arr, pi + 1, last)
    }
}
function partition(arr, first, last) {
    let bernardPivot = last
    let j = first
    for (let i = first; i < last ; i++) {
        if (arr[i] <= arr[bernardPivot]) {
            swap(arr, i, j)
            j ++
        }
    }
    swap(arr, last, j)
    return j
}

const tab = [1, 15, 12, 4, 6, 48, 2, 0, 2, 3, 15, 14, 8, 9, 5, 17, 5, 6, 8, 6]

quicksort(tab, 0, tab.length - 1)
console.table(tab)