// Importing data from CSV.
const fs = require('fs');
const file = fs.readFileSync('./todos.csv', 'utf-8');


const toDos = [];

const loadToDos = function(str) {
    const splitter = str.split('\n');
    
    for (const rows of splitter) {
        toDos.push(rows.split(','));
    }
    return toDos;
}
loadToDos(file);


const displayToDos = function(arr) {

    for (let i = 0; i < arr.length; i++) {
        if (arr[i][1] === 'complete') {
            console.log(arr[i][0] + '-' + arr[i][1] + ' ✅')
        } else if (arr[i][1] === 'uncomplete') {
            console.log(arr[i][0] + '-' + arr[i][1] + ' ✖')
        }
    }
}
displayToDos(toDos);

const readLine = require('readline');
const interface = readLine.createInterface({input: process.stdin, output: process.stdout});

const menu = `
Your options are:

1. Add a todo.
2. Remove a todo.
3. Mark a todo completed.
4. Mark a todo uncompleted.
5. Quit.
`;



const handleMenu = function(input) {
switch(input) {
    case '1':
        console.log(message);
        break;
    default:
        console.log("You're quitting!!!")
}
interface.close();
}

interface.question(menu, handleMenu);

const message = 'Okay Add a todo!';

const add = function(input) {
    
    let userArray = [input, 'incomplete'];
        toDos.push(userArray);
    
}
// displayToDos(toDos);

interface.question(message, add);







