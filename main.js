let currentPlayer = "X";
let arr = Array(9).fill(null);

function checkWinner() {
    const message = document.getElementById("message");
    // Define winning conditions
    const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    // Check each winning condition
    for (let condition of winningConditions) {
        const [a, b, c] = condition;
        if (arr[a] !== null && arr[a] === arr[b] && arr[b] === arr[c]) {
            message.innerText = `Winner is ${currentPlayer}`;
            return true;
        }
    }

    // Check for draw
    if (!arr.some(e => e === null)) {
        message.innerText = `Draw!!`;
        return true;
    }

    return false;
}

function handleClick(el) {
    const id = Number(el.id);
    // Check if cell is already occupied or game is over
    if (arr[id] !== null || document.getElementById("message").innerText) return;

    // Update array and display current player's mark
    arr[id] = currentPlayer;
    el.innerText = currentPlayer;

    // Check for winner
    if (!checkWinner()) {
        // Switch to the next player
        currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
}
