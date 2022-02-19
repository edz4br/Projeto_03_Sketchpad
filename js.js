let container = document.querySelector('.container')
let mouseDown = 0;
document.body.onmousedown = function () {
    mouseDown = true;
}
document.body.onmouseup = function () {
    mouseDown = false;
}
let subContainers = []
let gridSize = []
let clearButton = function () {
    let button = document.querySelector('.clear')
    button.addEventListener('click', (e) => {
        subContainers = []
        gridSize = []
        container.textContent = ''
        makeGrid(prompt('Grid size?'));
    })
}
let row = function (n) {
    let subCont = document.createElement('div')
    subCont.classList.add('sub-container')
    container.append(subCont)
    subContainers.push(subCont)
    for (let i = n; i > 0; i--) {
        let div = document.createElement('div')
        div.classList.add('grid')
        subCont.appendChild(div)
        gridSize.push(div)
    }
}
let makeGrid = function (n) {
    if (n > 64) {
        n = 64
    }
    for (let i = n; i > 0; i--) {
        row(n)
    }
    addColorEvent(gridSize)
}
let addColorEvent = function (n) {
    let black = 0
    for (let value of gridSize) {
        value.addEventListener('mousedown', (e => {
            let x = Math.floor(Math.random() * 256);
            let y = Math.floor(Math.random() * 256);
            let z = Math.floor(Math.random() * 256);
            let bgColor = "rgb(" + x + "," + y + "," + z + ")";
            if (black % 10 == 0) {
                value.style.backgroundColor = 'black'
                black++
            } else {
                value.style.backgroundColor = bgColor
                black++
            }
        }))
        value.addEventListener('mouseover', (e) => {
            let x = Math.floor(Math.random() * 256);
            let y = Math.floor(Math.random() * 256);
            let z = Math.floor(Math.random() * 256);

            let bgColor = "rgb(" + x + "," + y + "," + z + ")";


            if (mouseDown === true) {
                if (black % 10 == 0) {
                    value.style.backgroundColor = 'black'
                    black++
                } else {
                    value.style.backgroundColor = bgColor
                    black++
                }
            }
        })
    }
}
clearButton()
makeGrid(4)