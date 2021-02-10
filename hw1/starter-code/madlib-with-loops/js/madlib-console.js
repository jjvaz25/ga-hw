let startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
let startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];
let fav = []

document.getElementById("create").addEventListener('click', () => {
    document.getElementById("xForY").innerHTML = madlib()
})

document.getElementById("save").addEventListener('click', () => {
    fav.push(madlib())
})

document.getElementById("print").addEventListener('click', () => {
    document.getElementById("favorites").innerHTML = fav
})

let madlib = () => {
    let random1 = Math.floor((Math.random() * startupX.length));
    let random2 = Math.floor((Math.random() * startupY.length));
    let madlibStr = 'A startup that is ' + startupX[random1] + ', but for ' + startupY[random2]
    console.log(madlibStr)
    return madlibStr
}