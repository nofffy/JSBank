const prompt = require('prompt-sync')();
const fs = require('fs');
const jsonfile = require('jsonfile')

dataFile = 'users.JSON'
function findObjectByKey (array, key) {
    for (let index = 0; index < array.length; ++index) {
        const element = array[index];
        if (Object.keys(element) == key) {
            return element;
        } 
    }
}
console.log('What do you want to do? \n 1 Register \n 2 Check Balance');
var toDo = prompt();

if (toDo == 1){
    var login = prompt('What is your login?    ');
    var password = prompt('What is your password?   ');
    var obj = {
        pass: password,
        bal: 0
    }
    var data = JSON.parse (fs.readFileSync(dataFile,"utf-8"))
    data.push({[login]: obj});
    fs.writeFileSync(dataFile, JSON.stringify(data));

}
else if (toDo == 2){
    var login = prompt('What is your login?    ');
    var data = JSON.parse (fs.readFileSync(dataFile,"utf-8"))
    var tryPass = prompt("Whats is the password to your account?    ")
    if (findObjectByKey(data, login) == undefined){
        console.log("Not a valid login!");
    } else {
        if (tryPass == findObjectByKey(data, login)[login].pass){
            console.log(`Your balance is ${findObjectByKey(data, login)[login].bal}`)
        } else {
            console.log("That's not the right password!");
        }
    }
};  


