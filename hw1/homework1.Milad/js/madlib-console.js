let startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
let startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];
let mdl;
let fList = [];
let dp='';
//let random1 = Math.floor((Math.random() * startupX.length));
//let random2 = Math.floor((Math.random() * startupY.length));

//console.log('A startup that is ' + startupX[random1] + ', but for ' + startupY[random2]);

////  Create new startup
document.getElementById('create').onclick = function() {
    let random1 = Math.floor((Math.random() * startupX.length));
    let random2 = Math.floor((Math.random() * startupY.length));
    mdl = 'A startup that is ' + startupX[random1] + ', but for ' + startupY[random2];
    document.getElementById("xForY").innerHTML =  mdl;
}
////  Favorite Startup
document.getElementById('save').onclick = function() {
    //alert("works");
    fList.push(mdl);
    console.log(fList);
    document.getElementById("xForY").innerHTML =  'Save';
}
//// Print favorites
document.getElementById('print').onclick = function() {
    //alert("works");
    console.log('flist'+ fList);
    for (let i = 0; i < fList.length; i++) {
    dp = dp+ "<br />" + fList[i];
    document.getElementById("favorites").innerHTML =dp;
    //console.log(fList[i]);
    }
    //console.log(fList);
    //document.getElementById("favorites").innerHTML =  'Favourite List: ' + fList;

}