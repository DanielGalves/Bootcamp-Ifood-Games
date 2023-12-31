const state = {
    view: {
        squares: document.querySelectorAll(".square"),
        enemy: document.querySelector(".enemy"),
        timeLeft: document.querySelector("#time-left"),
        score: document.querySelector("#score"),
        lives: document.querySelector("#lives"),
    },
    values: {
        timerId: null,        
        gameVelocity: 1000,
        hitPosition: 0,
        result: 0,
        currentTime : 60,
        livePlayer: 3,
    },
    actions :{
        countDownTimerId: setInterval(countDown,1000),
    }
};

function resetGame(){
    state.values.timerId = null;
    state.values.hitPosition = 0;
    state.values.result = 0;
    state.values.currentTime = 60;
    state.values.livePlayer = 3;
}
function playSound(audioName){
    let audio = new Audio(`./src/audios/${audioName}.m4a`);
    audio.volume = 0.2;
    audio.play();
}

function countDown(){
    state.values.currentTime--;
    state.view.timeLeft.textContent = state.values.currentTime;

    if(state.values.currentTime <= 0){
        clearInterval(state.actions.countDownTimerId);
        alert("Game Over! O seu resultado foi: " + state.values.result);
        state.values.result = 0;
        state.values.currentTime = 60;       
    }
}


function randomSquare(){
    state.view.squares.forEach((square) => {
        square.classList.remove("enemy");
    });

    let randomNumber = Math.floor(Math.random() * 9);
    let randomSquare = state.view.squares[randomNumber];
    randomSquare.classList.add("enemy");
    state.values.hitPosition = randomSquare.id;

}

function moveEnemy(){
    state.values.timerId = setInterval(randomSquare, state.values.gameVelocity);
}

function addListenerHitBox(){
    state.view.squares.forEach((square) => {
        square.addEventListener("mousedown", () => {
            if(square.id === state.values.hitPosition){
                state.values.result++;
                state.view.score.textContent = state.values.result;
                state.values.hitPosition = null;
                playSound("hit");
            } else{
                state.values.livePlayer--;
                if(state.values.livePlayer >= 0){
                state.view.lives.textContent = state.values.livePlayer;
                } else {
                    alert("Game Over! Você zerou suas vidas!");
                    resetGame();
                }

            }
        } )
    });
}

function initialize(){
    moveEnemy();
    addListenerHitBox();
}

initialize();