const tab = [3, 9, 7, 1, 6, 2, 8, 4]

console.log("Original Tab : ")
console.table(tab)
shellSort(tab)
console.log("Sorted Tab : ")
console.table(tab)

function shellSort(arr) {
    let n = arr.length;

    //Start with a really large gap, and then reduce the gap until there isn't any
    //With this, the gap starts as half of the array length, and then half of that every time
    for (let gap = Math.floor(n/2); gap > 0; gap = Math.floor(gap/2))
    {
        //Do a insertion sort for each of the section the gap ends up dividing
        for (let i = gap; i < n; i += 1)
        {
            //We store the current variable
            let temp = arr[i];

            //This is the insertion sort to sort the section into order
            let j;
            for (j = i; j >= gap && arr[j-gap] > temp; j-=gap)
            {
                arr[j] = arr[j-gap];
            }

            arr[j] = temp;
        }
    }

    return arr;
}