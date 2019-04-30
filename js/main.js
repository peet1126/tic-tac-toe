// My code 

// /*----- constants -----*/ 
// const COLORS = {
//     '1': 'red',
//     '-1': 'blue',
//     '0': 'null',
// };


// /*----- app's state (variables) -----*/ 
// var board
// var turn
// var winner


// /*----- cached element references -----*/ 
// var squares = document.querySelectorAll('td div');


// /*----- event listeners -----*/ 
// document.querySelector('table').addEventListener('click', handleClick);


// /*----- functions -----*/
// initialize();

// function handleClick(evt) {

//     var idx = parseInt(evt.target.id.replace('sq', ''));
//     // if (board[idx] || winner) return;
//     board[idx] = turn;
//     turn *= -1;
//     render();
// }

// function render() {
//     board.forEach(function(sq, idx) {
//       squares[idx].style.background = COLORS[sq];
//     });
// }

// function initialize() {
//     board = [null, null, null ,null, null, null, null];
//     turn = 1;
//     winner = null;
//     render();
// }


// Solutions code

/*----- constants -----*/
// set players identifiers to colors
var lookup = {
    '1': 'purple',
    '-1': 'lime',
    'null': 'white'
  };
//   set var that holds every winning position
  var winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  
  /*----- app's state (variables) -----*/
//   set variables that will hold the different states of the game 
  var board, turn, winner
  
  /*----- cached element references -----*/
//  var squares = all the div HTML elements with parent of td
// var squares = what ever is passed into the div elements. div element is currently undefined 
  var squares = document.querySelectorAll('td div');
//   var message = the h1 HTML element which is undefined currently 
  var message = document.querySelector('h1');
  
  /*----- event listeners -----*/
//   adds a event listener to the HTML table element that is listening for a click and handleMove is the function that is attached to it
  document.querySelector('table').addEventListener('click', handleMove);
//   adds a event listener to the HTML button element that is listening for a click and initialize is the function that is attached to it
  document.querySelector('button').addEventListener('click', initialize);
  
  /*----- functions -----*/
//   call the initialize function to run
  initialize();
//   handleMove function is declared with evt as a parameter 
  function handleMove(evt) {
    // obtain index of square
//  var idx = just the number of the id tag, not the whole id. then the string is converted to a number
    var idx = parseInt(evt.target.id.replace('sq', ''));
    // check if square is available and return if not
    if (board[idx] || winner) return;
    // update state (board, turn, winner)
//  the board array now holds 1 or -1 
    board[idx] = turn;
    turn *= -1;
//  calls the getWinner function and if there is a winner that players identifier is assigned to winner
    winner = getWinner();
//  call the render function
    render();
  }
//   getWinner function is defined 
  function getWinner() {
//   loop through winningCombos array 
    for (var i = 0; i < winningCombos.length; i++) {
//   I can't follow this one 
      if (Math.abs(board[winningCombos[i][0]] + board[winningCombos[i][1]] + board[winningCombos[i][2]]) === 3) return board[winningCombos[i][0]];
    }
//   this adds up 1 and -1 from the board array and if one of the winning positions adds up to the absolute value of 3 it is the winner 
    // Less elegant approach:
    // if (Math.abs(board[0] + board[1] + board[2]) === 3) return board[0];
    // if (Math.abs(board[3] + board[4] + board[5]) === 3) return board[3];
    // if (Math.abs(board[6] + board[7] + board[8]) === 3) return board[6];
    // if (Math.abs(board[0] + board[3] + board[6]) === 3) return board[0];
    // if (Math.abs(board[1] + board[4] + board[7]) === 3) return board[1];
    // if (Math.abs(board[2] + board[5] + board[8]) === 3) return board[2];
    // if (Math.abs(board[0] + board[4] + board[8]) === 3) return board[0];
    // if (Math.abs(board[2] + board[4] + board[6]) === 3) return board[2];
//   if the board array has null for any index return null for getwinner 
    if (board.includes(null)) return null;
//   if no winning position has been met and there are no nulls in the board array return 'T'
    return 'T';
  }
//   render function is defined 
  function render() {
//   loop through the board array and apply the color that is assigned that player. the square that was clicked will not change color 
    board.forEach(function(sq, idx) {
      squares[idx].style.background = lookup[sq];
    });
//   if winner variable is 'T'(tie) message pops up 
    if (winner === 'T') {
      message.innerHTML = 'Rats, another tie!';
//   if winner variable is = not null message will pop up 
    } else if (winner) {
//   a 1 or -1 will sit inside lookup[] and that will return the players color in all caps 
      message.innerHTML = `Congrats ${lookup[winner].toUpperCase()}!`;
//   if the last two statements is not true the player who's turn it is will show in all caps 
    } else {
      message.innerHTML = `${lookup[turn].toUpperCase()}'s Turn`;
    }
  }
//   initialize function is declared 
  function initialize() {
//   board variable is an array of 9 nulls 
    board = [null, null, null, null, null, null, null, null, null];
    // board = new Array(9).fill(null);
    turn = 1;
    winner = null;
    render();
  }