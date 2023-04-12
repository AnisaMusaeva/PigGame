const playerOne = {
    score: 0,
    currentScore: 0,
    setScoreHtml() {
        document.querySelector("#score-1").textContent = this.score;
    },
    setCurrentScoreHtml() {
        document.querySelector("#current-1").textContent = this.currentScore;
    },
};
const elemen = document.querySelector(".player-1");
const playerTwo = {
    score: 0,
    currentScore: 0,
    setScoreHtml() {
        document.querySelector("#score-2").textContent = this.score;
    },
    setCurrentScoreHtml() {
        document.querySelector("#current-2").textContent = this.currentScore;
    },
};

let player = {
    current: playerOne,
    changePlayer() {
        if (this.current === playerOne) {
            this.current = playerTwo;
            document.querySelector(".player-1").classList.remove("player-active");
            document.querySelector(".player-2").classList.add("player-active");
        } else {
            this.current = playerOne;
            document.querySelector(".player-2").classList.remove("player-active");
            document.querySelector(".player-1").classList.add("player-active");
        }
    },
};



document.querySelector(".btn-new").addEventListener("click", function () {
    playerOne.score = 0;
    playerOne.currentScore = 0;
    playerTwo.score = 0;
    playerTwo.currentScore = 0;
});

document.querySelector(".btn-roll").addEventListener("click", function () {
    const namberDace = Math.floor(Math.random() * 6 + 1);
    console.log(namberDace);
    document
        .querySelector(".dice")
        .setAttribute("src", `dice${namberDace}.png`);

    if (namberDace !== 1) {
        player.current.currentScore += namberDace;
        player.current.setCurrentScoreHtml();
    } else {
        player.current.currentScore = 0;
        player.current.setCurrentScoreHtml();
        player.changePlayer();
    }
});

document.querySelector(".btn-hold").addEventListener("click", function () {
    player.current.score += player.current.currentScore;
    player.current.setScoreHtml();
    player.current.currentScore = 0;
    player.current.setCurrentScoreHtml();
    player.changePlayer();
});

document.querySelectorAll(".btn").forEach(elemen => {
    elemen.addEventListener("click", function () {
        if(player.current.score + player.current.currentScore >= 100) {
            console.log('Game Over')
        }
    });
})
