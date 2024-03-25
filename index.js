let count = 0
let countEl = document.getElementById("count-el") //targetting the h2 element
let saveEl = document.getElementById("save-el") //targetting the p element

function increment () {
    count += 1
    countEl.textContent = count
}

function decrement () {
    count = count -1
    countEl.textContent = count
}

function save () {
    let countStr = count + "-"
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0 
}

function reset () {
    let text = "PREVIOUS ENTERIES:"
    saveEl.textContent = text
    countEl.textContent = 0
    count = 0
}
