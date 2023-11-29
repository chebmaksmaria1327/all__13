// Получаем контейнер доски
var chessboard = document.getElementById("chessboard");
// Создаем шахматную доску
for (var row = 0; row < 8; row++) {
    for (var col = 0; col < 8; col++) {
        var square = document.createElement("div"); square.className = "square";
        if ((row + col) % 2 === 0) {
            square.classList.add("white");
        } else {
            square.classList.add("black");
        }
        chessboard.appendChild(square);
    }
}