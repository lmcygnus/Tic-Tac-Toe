const displaySquares = document.querySelectorAll(".square");
const createPlayer = (name, mark) => {
    return {name, mark};
}

const game = (() => {
    let player1 = createPlayer("x player", "x");
    let player2 = createPlayer("o player", "o");
    let activePlayer = player1;
    
    const switchTurn = () => {
        activePlayer = (activePlayer === player1) ? player2 : player1;
    };

    const updateDisplay = () => {
        displaySquares.forEach(square => {
            square.addEventListener('click', () => {
                if (square.textContent === "") {
                    square.textContent = activePlayer.mark;
                    switchTurn();
                }
            });
        });
    };

    return { updateDisplay };
})();

game.updateDisplay();

const gameboard = (() => {
    let squares = ["","","","","","","","",""];
    console.log(displaySquares)
    const setdata = () => {
        squares.forEach((_, index) => {
            displaySquares[index].setAttribute("data-number", index);
            displaySquares[index].addEventListener("click", game.updateDisplay());
        });
        
    };
    return {
        setdata,
    };s
})();
gameboard.setdata();

