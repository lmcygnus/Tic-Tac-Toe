const gameboard = (() => {
    let squares = ["","","","","","","","",""];
    const displaySquares = document.querySelectorAll(".square");
    console.log(displaySquares)
    const setdata = () => {
        squares.forEach((_, index) => {
            displaySquares[index].setAttribute("data-number", index);
            displaySquares[index].addEventListener("click", () => {
                alert(displaySquares[index].dataset.number);
            });
        });
    };
    return {
        setdata
    };
})();
gameboard.setdata();
const createPlayer = (name, mark) => {
    return {name, mark};
}

const game = (() => {
    let players = [];
    let currentPlayer;
    const start = () => {
        players = [createPlayer("x", "x"), createPlayer("o", "o")];
        currentPlayer = 0;
        gameboard.setId();
    }

    return {start,};
})();