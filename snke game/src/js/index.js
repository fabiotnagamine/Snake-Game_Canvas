const playBoard = document.querySelector(".play-board");
const scoreElement = document.querySelector(".score");
const high_scoreElement = document.querySelector(".high-score");
const controls = document.querySelectorAll(".controls i");
const pointSound = document.getElementById("pointSound");


var gameOver = false;
var food_x_axis
var food_y_axis;
var snake_x_axis = 5
var snake_y_axis = 5;
var change_x_axis = 0
var change_y_axis = 0;
var snake_body = [];
var setIntervalId;
var score = 0;

var high_score = localStorage.getItem("high-score") || 0;
high_scoreElement.innerText = `High Score: ${high_score}`;

const updateFoodPosition = () => {
    // Utiliza a biblioteca Math para o random, para colocar a maçã na posição aleatória 
    food_x_axis = Math.floor(Math.random() * 30) + 1;
    food_y_axis = Math.floor(Math.random() * 30) + 1;
}

const handleGameOver = () => {
    //Zera o cronometro
    clearInterval(setIntervalId);
    alert("Game Over! Clique em OK para reiniciar...");
    location.reload();
}

const changeDirection = e => {
    // Changing velocity value based on key press
    if(e.key === "ArrowUp" && change_y_axis != 1) {
        change_x_axis = 0;
        change_y_axis = -1;
    } else if(e.key === "ArrowDown" && change_y_axis != -1) {
        change_x_axis = 0;
        change_y_axis = 1;
    } else if(e.key === "ArrowLeft" && change_x_axis != 1) {
        change_x_axis = -1;
        change_y_axis = 0;
    } else if(e.key === "ArrowRight" && change_x_axis != -1) {
        change_x_axis = 1;
        change_y_axis = 0;
    }
}

//Alterando o valor da velocidade co base no pressionamento do teclado
controls.forEach(button => button.addEventListener("click", () => changeDirection({ key: button.dataset.key })));

const initGame = () => {
    if(gameOver) return handleGameOver();
    var html = `<div class="food" style="grid-area: ${food_y_axis} / ${food_x_axis}"></div>`;

    // Fazendo a verificação para a maçã 
    if(snake_x_axis === food_x_axis && snake_y_axis === food_y_axis) {
        updateFoodPosition();
        snake_body.push([food_y_axis, food_x_axis]); 
        // Aumenta o tamanho da cobra
        score++; // increment score by 1
        high_score = score >= high_score ? score : high_score;
        localStorage.setItem("high-score", high_score);
        scoreElement.innerText = `Score: ${score}`;
        high_scoreElement.innerText = `High Score: ${high_score}`;
    }

    snake_x_axis += change_x_axis;
    snake_y_axis += change_y_axis;
    
    for (var i = snake_body.length - 1; i > 0; i--) {
        snake_body[i] = snake_body[i - 1];
    }
    snake_body[0] = [snake_x_axis, snake_y_axis];

    // Fazendo a verificação para caso a cobra colida com a 
    if(snake_x_axis <= 0 || snake_x_axis > 30 || snake_y_axis <= 0 || snake_y_axis > 30) {
        return gameOver = true;
    }

    for (var i = 0; i < snake_body.length; i++) {
        //Adiciona uma div para cada parte do corpo da cobra
        html += `<div class="head" style="grid-area: ${snake_body[i][1]} / ${snake_body[i][0]}"></div>`;
        // Uma pequena verificação para a cobra, se ela encostar no proprio corpo -> Game Over!!
        if (i !== 0 && snake_body[0][1] === snake_body[i][1] && snake_body[0][0] === snake_body[i][0]) {
            gameOver = true;
        }
    }
    playBoard.innerHTML = html;
}

updateFoodPosition();
setIntervalId = setInterval(initGame, 100);
document.addEventListener("keyup", changeDirection);