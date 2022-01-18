//setting up the board as an array
let board = [
  ['','',''],
  ['','',''],
  ['','',''],
]

let players = ['X','O']
let currentPlayer
let available = []

function setup() {
  createCanvas(400,400);
  //using .length makes currentPlayer an index in the array
  currentPlayer = floor(random(players.length))
  for (let j = 0; j < 3; j++) {
    for (let i = 0; i < 3; i++) {
      available.push([i,j])
    }
  }
}

//The beginnings of me trying to figure out how to choose and display a winner using the CodingTrain tutorial
/*function checkWinner() {
  let winner = null;
  //horizontal check
   for (let i = 0; i < 3; i++) {
     if board[i][0] == board[i][1] == board[i][2] {
       winner = board[i][0];
     }
   }
  //vertical check
  for (let i = 0; i < 3; i++) {
     if board[0][i] == board[0][i] == board[0][i] {
       winner = board[0][i];
     }
   }
  //diagonal check
    if board[0][0] == board[1][1] == board[2][2] {
       winner = board[0][0];
     }
    if board[2][0] == board[1][1] == board[0][2] {
       winner = board[2][0];
     }


  if (winner == null && available.length == 0) {
    console.log('tie');
  } else {
    console.log('winner')
  }
}*/

function nextTurn() {
  //index = a number between zero and the length of how many things are available
  let index = floor(random(available.length))
  //spot removes the found index value
  let spot = available.splice(index,1)[0];
  let i = spot[0];
  let j = spot[1];
  board[i][j] = players[currentPlayer]
  //The one thing I don't understand about this code is the use of the percent symbol (or module?) in this line right here. I will need to ask Mr. Oswald about it or do some research. I do know that this line helps make sure each turn switches back and forth between the two players.
  currentPlayer = (currentPlayer + 1) % players.length
}
//Candice helped me debug this code - she went through it with me and pointed out that I needed parenthesis around currentPlayer + 1

//each time I press the mouse, a 'turn' will happen and alternating Xs and Os will appear
function mousePressed() {
  nextTurn()
}

function draw() {
  background('lightblue')
  let w = width/3
  let h = height/3
  //these lines make up the grid lines for the board
  line(w,0,w,height)
  line(w*2,0,w*2,height)
  line(0,h,width,h)
  line(0,h*2,width,h*2)

  for (let j = 0; j < 3; j++) {
    for (let i = 0; i < 3; i++) {
    let x = w * i + w/2
    let y = h * j + h/2
  
    let spot = board[i][j];
    strokeWeight(5)
    if (spot == players[1]) {
      noFill()
      ellipse(x,y,w/2)
    } else if (spot == players[0]){
      //Making two lines to form the Xs, and using the variable xs defined below to place each X in the center of its box
      let xs = w/3
      line(x - xs, y - xs, x + xs, y + xs)
      line(x + xs, y - xs, x - xs, y + xs)
    }
      
    }
  }
}