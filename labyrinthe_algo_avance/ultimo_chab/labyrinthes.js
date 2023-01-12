

//fonction pour créer le labyrinthes
function createlab(i, j) {

    let elementHtml = document.createElement("div");
    document.getElementById("board").appendChild(elementHtml);
    elementHtml.setAttribute("id", "container");

    let myLab = lab[i]["ex-" + j];
    myLab.forEach(element => {

        div = document.createElement("div");
        document.getElementById("container").appendChild(div);
        div.setAttribute("class", "container-element");
        div.setAttribute("id", element.posX + "." + element.posY,)
        elementHtml.style = "width :" + i * 100 + "px"

        if (element.walls[0]) {
            div.style.borderTop = "2px solid black";
        }
        if (element.walls[1]) {
            div.style.borderRight = "2px solid black"
        }
        if (element.walls[2]) {
            div.style.borderBottom = "2px solid black"
        }
        if (element.walls[3]) {
            div.style.borderLeft = "2px solid black"
        }

    });

    const start = document.getElementById("0.0");
    start.style.backgroundcolor = "red";

    const size = i - 1;
    const arrival = document.getElementById(size + "." + size);

    arrival.style.backgroundcolorcolor = "red";

    return myLab
}

// bouton pour algo maison
document.querySelector("#create").addEventListener('click', function () {

    let selectValue = document.getElementById("case").value;
    let selectExo = document.getElementById("exo").value;
    let mymaze = createlab(selectValue, selectExo);

    resolvemaze(mymaze)
});

// bouton pour BFS
document.querySelector("#BFS").addEventListener('click', function () {

    let selectValue = document.getElementById("case").value;
    let selectExo = document.getElementById("exo").value;
    let mymaze = createlab(selectValue, selectExo);
    let position = {"posX": 0, "posY": 0}
    BFS(mymaze, position)
});


// bouton pour DFS_BFS
document.querySelector("#DFS_BFS").addEventListener('click', function () {
    let selectValue = document.getElementById("case").value;
    let selectExo = document.getElementById("exo").value;
    let mymaze = createlab(selectValue, selectExo);
    let position = {"posX": 0, "posY": 0}
    DFS(mymaze, position)
});


//algo de résolution maison
async function resolvemaze(maze) {

    console.log(maze)

    let position = {"posX": 0, "posY": 0}

    let finishX = maze[maze.length - 1].posX;

    let finishY = maze[maze.length - 1].posY;


    // maze.find(square => square.posX === position.posX && square.posY === position.posY).visited = false ;

    while (!(position.posX === finishX && position.posY === finishY)) {
        await delay(25)
        await display(position)


        let actualsquare = maze.find(square => square.posX === position.posX && square.posY === position.posY);

        if (actualsquare.walls.filter(mur => mur === true).length === 1 && actualsquare.intersection === undefined) {
            maze.find(square => square.posX === position.posX && square.posY === position.posY).intersection = true;
        }
        console.log(actualsquare);


        if (actualsquare.walls[0] === false && maze.find(nextsquare => nextsquare.posY === actualsquare.posY - 1 && nextsquare.posX === actualsquare.posX).visited === undefined) {
            maze.find(square => square.posX === position.posX && square.posY === position.posY).visited = true;
            position.posY = position.posY - 1
        } else if (actualsquare.walls[1] === false && maze.find(nextsquare => nextsquare.posX === actualsquare.posX + 1 && nextsquare.posY === actualsquare.posY).visited === undefined) {
            maze.find(square => square.posX === position.posX && square.posY === position.posY).visited = true;
            position.posX = position.posX + 1
        } else if (actualsquare.walls[2] === false && maze.find(nextsquare => nextsquare.posY === actualsquare.posY + 1 && nextsquare.posX === actualsquare.posX).visited === undefined) {
            maze.find(square => square.posX === position.posX && square.posY === position.posY).visited = true;
            position.posY = position.posY + 1
        } else if (actualsquare.walls[3] === false && maze.find(nextsquare => nextsquare.posX === actualsquare.posX - 1 && nextsquare.posY === actualsquare.posY).visited === undefined) {
            maze.find(square => square.posX === position.posX && square.posY === position.posY).visited = true;
            position.posX = position.posX - 1
        } else {
            maze.find(square => square.posX === position.posX && square.posY === position.posY).visited = true;
            position.posY = maze.find(inter => inter.intersection === true).posY;
            position.posX = maze.find(inter => inter.intersection === true).posX;
            maze.find(inter => inter.intersection === true).intersection = false
        }


    }
    await display(position)
    console.log("you won")
}

// DISPLAY CHEMIN

async function display(f) {
    var elem = document.getElementById(f.posX + "." + f.posY);
    elem.style.backgroundColor = "green"
}

async function delay(delayInms) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(2);
        }, delayInms);
    });
}

// fonction pour récupérer les voisins
function neighbours(tableau, X, Y) {
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
async function BFS(tab, start) {
    let finish = tab[tab.length - 1]
    let q = []
    tab.path = [];
    q.push(start)

    while (q.length !== 0) {
        let n = q.shift();
        tab.path.push(n);
        n.visited = true;

        await delay(30)
        await display(n)

        if (n === finish) {
            console.log(n)
            return tab.path
        }
        for (let w of neighbours(tab, n.posX, n.posY)) {
            if (w.visited === undefined) {
                q.push(w)
            }
        }
    }

}

// Fonction de résolution DFS_BFS
async function DFS(tab, start) {
    let finish = tab[tab.length - 1]
    let q = []
    tab.path = [];
    q.push(start)

    while (q.length !== 0) {
        let n = q.pop();
        tab.path.push(n);
        n.visited = true;

        await delay(30)
        await display(n)

        if (n === finish) {
            console.log(n)
            return tab.path
        }
        for (let w of neighbours(tab, n.posX, n.posY)) {
            if (w.visited === undefined) {
                q.push(w)
            }
        }
    }

}