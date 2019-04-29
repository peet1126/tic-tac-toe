/*----- constants -----*/ 
const COLORS = {
    '1': 'red',
    '-1': 'blue',
    '0': 'null',
};


/*----- app's state (variables) -----*/ 
var board
var turn
var winner


/*----- cached element references -----*/ 
var squares = document.querySelectorAll('td div');


/*----- event listeners -----*/ 
document.querySelector('table').addEventListener('click', handleClick);


/*----- functions -----*/
initialize();

function handleClick(evt) {

    var idx = parseInt(evt.target.id.replace('sq', ''));
    if (board[idx] || winner) return;
    board[idx] = turn;
    turn *= -1;
    render();
}

function render() {
    board.forEach(function(sq, idx) {
      squares[idx].style.background = COLORS[sq];
    });
}

function initialize() {
    board = [null, null, null ,null, null, null, null];
    turn = 1;
    winner = null;
    render();
}