const createPlayer = (mark) => {
    return {mark};
}

const checkWinner = (squares, activePlayer) => {
    const winConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (const condition of winConditions) {
        const [a, b, c] = condition;
        if (
            squares[a] !== "" &&
            squares[a] === squares[b] &&
            squares[a] === squares[c]
        ) {
            return activePlayer;
        }
    }
    return null;
};

const gameboard = (() => {
    const displaySquares = document.querySelectorAll(".square");
    const message = document.querySelector(".message");
    const reset = document.querySelector(".reset");

    let player1 = createPlayer("x");
    let player2 = createPlayer("o");
    let activePlayer = player1;
    let squares = ["", "", "", "", "", "", "", "", ""]; 
    let gameWon = false;

    const switchTurn = () => {
        activePlayer = (activePlayer === player1) ? player2 : player1;
    };

    const updateDisplay = () => {
        displaySquares.forEach((square, index) => {
            square.addEventListener('click', () => {
                if (!gameWon && squares[index] === "") {
                    square.textContent = activePlayer.mark;
                    squares[index] = activePlayer.mark;
                    const winner = checkWinner(squares, activePlayer);
                    if (winner) {
                        message.textContent =`${winner.mark} has won the game.`;
                        gameWon = true;
                    } 
                    else if (!squares.includes("") && !winner) {
                        message.textContent = "It's a tie!"
                    }
                    else {
                        switchTurn();
                    }
                }
            });
        });
    };

    const restartGame = () => {
        reset.addEventListener("click", () => {
            displaySquares.forEach((square, index) => {
                square.textContent = "";
                squares = ["", "", "", "", "", "", "", "", ""];
                message.textContent = "";
                gameWon = false;
            });
        })
    }

    return { updateDisplay, restartGame };

})();

gameboard.updateDisplay();
gameboard.restartGame();




