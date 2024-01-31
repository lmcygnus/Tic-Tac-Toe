const displaySquares = document.querySelectorAll(".square");
const message = document.querySelector(".message")

const createPlayer = (name, mark) => {
    return {name, mark};
}

const game = (() => {
    let player1 = createPlayer("x player", "x");
    let player2 = createPlayer("o player", "o");
    let activePlayer = player1;
    let squares = ["", "", "", "", "", "", "", "", ""];

    const switchTurn = () => {
        activePlayer = (activePlayer === player1) ? player2 : player1;
    };

    const checkWinner = () => {
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

    const updateDisplay = () => {
        displaySquares.forEach((square, index) => {
            square.addEventListener('click', () => {
                if (squares[index] === "") {
                    square.textContent = activePlayer.mark;
                    squares[index] = activePlayer.mark;

                    const winner = checkWinner();
                    if (winner) {
                        console.log(`${winner.name} ha ganado el juego.`);
                    } else {
                        switchTurn();
                    }
                }
            });
        });
    };

    return { updateDisplay };
})();

game.updateDisplay();

const gameboard = (() => {
    const setdata = () => {
        displaySquares.forEach((_, index) => {
            displaySquares[index].setAttribute("data-number", index);
        });
        
    };

    return {setdata};

})();
gameboard.setdata();

