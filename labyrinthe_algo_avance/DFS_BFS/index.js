import data from './data.js'

let numberLaby = '25'
let numberEx = 'ex-2'
let lab = data[numberLaby][numberEx]
let positionXY = {"posX": 0, "posY": 0}
const parent = document.getElementById("labyrinthe")

parent.style.gridTemplateColumns = ("repeat(" + numberLaby + ", auto)");

function createLab() {
    for (let i = 0; i < lab.length; i++) {
        const cell = document.createElement("div")
        parent.appendChild(cell)
        const littleCell = document.createElement('div')
        cell.appendChild(littleCell);
        if (lab[i].walls[0]) {
            cell.classList.add('top')
        }
        if (lab[i].walls[1]) {
            cell.classList.add('right')
        }
        if (lab[i].walls[2]) {
            cell.classList.add('bottom')
        }
        if (lab[i].walls[3]) {
            cell.classList.add('left')
        }
        if (lab[i].entrance) {
            cell.classList.add('entrance', 'inAndOut')
        }
        if (lab[i].exit) {
            cell.classList.add('end', 'inAndOut')
        }
        cell.id = i;
    }
}

function getPos(x, y) {
    for (let j = 0; j < lab.length; j++) {
        if (lab[j].posX === x && lab[j].posY === y) {
            return j;
        }
    }
}

function displayCorrectPath(f) {
    let posID = getPos(f.posX, f.posY)
    let elem = document.getElementById(posID);
    elem.style.backgroundColor = "red"
}

function displaySearch(f) {
    let posID = getPos(f.posX, f.posY)
    let elem = document.getElementById(posID);
    elem.style.backgroundColor = "green"
}

async function delay(delayInms) {
    // Return a new promise that will resolve after the specified delay
    return new Promise(resolve => {
        // Use setTimeout to execute a function after a specified delay
        setTimeout(() => {
            // Resolve the promise with the value 2
            resolve(2);
        }, delayInms);
    });
}

// fonction pour récupérer les voisins
function findNeighbours(tableau, X, Y) {
    let position = {"posX": X, "posY": Y}
    let actualsquare = tableau.find(square => square.posX === position.posX && square.posY === position.posY);
    let voisin = []
    if (actualsquare.walls[0] === false) {
        tableau.find(square => square.posX === position.posX && square.posY === position.posY).visited = true;
        voisin.push(tableau.find(nextsquare => nextsquare.posY === actualsquare.posY - 1 && nextsquare.posX === actualsquare.posX))
    }
    if (actualsquare.walls[1] === false) {
        tableau.find(square => square.posX === position.posX && square.posY === position.posY).visited = true
        voisin.push(tableau.find(nextsquare => nextsquare.posX === actualsquare.posX + 1 && nextsquare.posY === actualsquare.posY))
    }
    if (actualsquare.walls[2] === false) {
        tableau.find(square => square.posX === position.posX && square.posY === position.posY).visited = true;
        voisin.push(tableau.find(nextsquare => nextsquare.posX === actualsquare.posX && nextsquare.posY === actualsquare.posY + 1))
    }
    if (actualsquare.walls[3] === false) {
        tableau.find(square => square.posX === position.posX && square.posY === position.posY).visited = true;
        voisin.push(tableau.find(nextsquare => nextsquare.posX === actualsquare.posX - 1 && nextsquare.posY === actualsquare.posY))
    }
    return voisin
}

// Fonction de résolution BFS
async function oldBFS(tab, start) {
    let finish = tab[tab.length - 1]
    let q = []
    tab.path = [];
    q.push(start)

    while (q.length !== 0) {
        let n = q.shift();
        tab.path.push(n);
        n.visited = true;

        await delay(300)
        await displayCorrectPath(n)

        if (n === finish) {
            console.log(n)
            return tab.path
        }
        for (let w of findNeighbours(tab, n.posX, n.posY)) {
            if (w.visited === undefined) {
                q.push(w)
            }
        }
    }

}

//FILO
async function BFS(tab, start) {
    // Get the finish cell from the tab array
    let finish = tab[tab.length - 1]
    // Create an empty queue
    let queue = []
    // Push the start cell to the queue
    let newTab = tab;
    newTab.path = [];
    queue.push(start)
    // While the queue is not empty
    while (queue.length > 0) {
        // Get the first cell in the queue in green
        let current = queue.shift()
        newTab.path.push(current);
        current.visited = true;
        // Show the current exploration path
        await delay(20)
        await displaySearch(current);
        // If the current cell is the finish cell, break the loop
        if (current === finish) {
            break
        }
        // Get the neighbours of the current cell
        let neighbours = findNeighbours(tab, current.posX, current.posY)
        // Iterate through each neighbour
        for (let i = 0; i < neighbours.length; i++) {
            // If the neighbour has not been visited
            if (!neighbours[i].visited) {
                // Mark the neighbour as visited
                neighbours[i].visited = true
                // Set the current cell as the neighbour's previous cell
                neighbours[i].prev = current
                // Push the neighbour to the queue
                queue.push(neighbours[i])
            }
        }
    }
    // Create an empty path array
    let path = []
    // Start with the finish cell
    let current = finish
    // Iterate until the current cell is the start cell
    while (current !== start) {
        // Push the current cell to the path array
        path.push(current)
        // Go to the current cell's previous cell
        current = current.prev
    }
    // Push the start cell to the path array
    path.push(start)
    // Reverse the path array
    path.reverse()
    // Iterate through the path array
    for (let i = 0; i < path.length; i++) {
        // Wait for 50ms
        await delay(50)
        // Color the current cell in red
        displayCorrectPath(path[i])
    }
}

// Fonction de résolution DFS_BFS
async function oldDFS(tab, start) {
    let finish = tab[tab.length - 1]
    let q = []
    tab.path = [];
    q.push(start)

    while (q.length !== 0) {
        let n = q.pop();
        tab.path.push(n);
        n.visited = true;
        await delay(300)
        displayCorrectPath(n)

        if (n === finish) {
            console.log(n)
            return tab.path
        }
        for (let w of findNeighbours(tab, n.posX, n.posY)) {
            if (w.visited === undefined) {
                q.push(w)
            }
        }
    }
}

//LIFO
async function DFS(tab, start) {
    // Declare a variable 'finish' which is the last element of the 'tab' array.
    let finish = tab[tab.length - 1]
    // Declare a variable 'queue' which is an empty array, and push the 'start' position to it.
    let queue = []
    // The searchTab is here in order for us to show in browser all the explored option, where the path array used later, is for the correct path.
    // Here we append an element to searchTab with the dot operator. We do the same with .visited or .prev later.
    let searchTab = tab;
    searchTab.path = [];
    queue.push(start)

    // A while loop is used here, which will continue until the 'queue' is empty.
    while (queue.length > 0) {
        // The first element of the queue is popped and assigned to a variable called 'current'.
        let current = queue.pop();
        searchTab.path.push(current);
        current.visited = true;
        // Show the current exploration path in green
        await delay(20)
        await displaySearch(current);
        // Check if 'current' is the finish cell, if yes it break the loop.
        if (current === finish) {
            break
        }
        // The 'findNeighbours(tab, current.posX, current.posY)' function is called to get the neighbours of the current cell
        let neighbours = findNeighbours(tab, current.posX, current.posY)
        // iterates through them.
        for (let i = 0; i < neighbours.length; i++) {
            // If a neighbour has not been visited before
            if (!neighbours[i].visited) {
                // it sets its 'visited' property to true
                neighbours[i].visited = true
                // and sets its 'prev' property to the current cell.
                neighbours[i].prev = current
                //Then it pushes the neighbour to the queue so that it can be processed in the next iteration of the while loop.
                queue.push(neighbours[i])
            }
        }
    }
    // Once the loop is finished, it creates an empty array called path
    let path = []
    // then it starts a new loop where it starts from the finish cell,
    let current = finish
    // and it goes through each cell's prev property until it reaches the start cell.
    while (current !== start) {
        //It pushes each cell to the path array in reverse order
        path.push(current)
        current = current.prev
    }
    path.push(start)
    path.reverse()
    // so that it starts with the start cell and ends with the finish cell.
    // Finally, it iterates through the path array
    for (let i = 0; i < path.length; i++) {
        // and for each cell, it calls the 'await delay(50)' function
        await delay(50)
        // with a delay of 50ms to pause the execution of the function
        // before calling the 'display(path[i])' function to color it in red.
        displayCorrectPath(path[i])
    }
}

createLab();
BFS(lab, positionXY)