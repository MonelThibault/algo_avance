function swap(Arr, i, j) {
    if (Arr[i] > Arr[j]) {
        let temp = Arr[i]
        Arr[i] = Arr[j]
        Arr[j] = temp
    }
}

function insertionSort(inputArr) {
    let size = inputArr.length;
    // On itère sur l'array, i commence à l'index 1 et j à i - 1
    for (let i = 1; i < size; i++) {
        // On stocke la valeure à l'index de i
        let currentValue = inputArr[i];
        let j = i - 1;
        // Ce while permet d'itérer en sens inverse sur l'array en partant de i - 1, jusqu'à ce qu'on trouve une valeure plus haute que l'actuelle
        while ((j > -1) && (currentValue < inputArr[j])) {
            inputArr[j + 1] = inputArr[j];
            j--;
        }
        inputArr[j + 1] = currentValue;
        //console.log(inputArr);
    }
    return inputArr;
}

function selectionSort(inputArr) {
    let size = inputArr.length;
    for (let i = 0; i < size; i++) {
        // Finding the smallest number in the subarray
        let minPos = i;
        for (let j = i + 1; j < size; j++) {
            if (inputArr[j] < inputArr[minPos]) {
                minPos = j;
            }
        }
        if (minPos !== i) {
            // Swapping the elements
            let tmp = inputArr[i];
            inputArr[i] = inputArr[minPos];
            inputArr[minPos] = tmp;
        }
    }
    return inputArr;
}

function bubbleSort(inputArr) {
    let size = inputArr.length;
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            if (inputArr[j] > inputArr[j + 1]) {
                let tmp = inputArr[j];
                inputArr[j] = inputArr[j + 1];
                inputArr[j + 1] = tmp;
            }
        }
    }
    return inputArr;
}

function fusionSort(inputArr, indexStart, indexEnd) {
}

function shellSort(inputArr) {
}

/////////////////////////////////////////////////////////////
//                          START                       ////
////////////////////////////////////////////////////////////

// Création de list

const list = [];
let size = 8;
for (let i = 0; i < size; i++) {
    list.push(Math.floor(Math.random() * size * 2));
}


// Calculs, performances


var insertionList = insertionSort([...list]);

var selectionList = selectionSort([...list]);

var bubbleList = bubbleSort([...list]);

var fusionList = fusionSort([...list], 0, list.length);

var shellList = shellSort([...list]);


// Affichage des résultats
console.log(list);
// console.log("Insertion");
// console.log(insertionList);
// console.log("Selection");
// console.log(selectionList);
console.log("Bubble");
console.log(bubbleList);
// console.log(fusionList);
//console.log(shellList);