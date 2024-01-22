
const state ={
    score:{
        playerScore: 0,
        computerScore: 0,
        scoreBox: document.getElementById("score_points"),
    },

    cardSprites:{
        avatar: document.getElementById("card-image"),
        name: document.getElementById("card-name"),
        type: document.getElementById("card-type"),
    },
    filedCards:{
        player: document.getElementById("player-card"),               
        computer: document.getElementById("computer-card")
    },
    playerSides :{
        player1: "player-cards",
        playe1Box : document.querySelector("#player-cards"),
        computer:"computer-cards",
        computerBox : document.querySelector("#computer-cards"),

    },
    actions:{
        button:document.getElementById("next-duel")
    }
};

const pathImages = "./src/assets/icons/";


const cardData = [
    {
        id:0,
        name: "Blue Eyes White Dragon",
        type: "Paper",
        img: `${pathImages}dragon.png`,
        WinOf :[1],
        LoseOf:[2],
    },
    {
        id:1,
        name: "Dark Magician",
        type: "Rock",
        img: `${pathImages}magician.png`,
        WinOf :[2],
        LoseOf:[0],
    },
    {
        id:2,
        name: "Exodia",
        type: "Scissors",
        img: `${pathImages}exodia.png`,
        WinOf :[0],
        LoseOf:[1],
    },
];

async function getRandomCardId(){
    const randomIndex = Math.floor(Math.random()* cardData.length)
    return cardData [randomIndex].id;
}

async function createCardImage(IdCard, fieldSide)
{
    const cardImage = document.createElement("img");
    cardImage.setAttribute("height","100px");
    cardImage.setAttribute("src","./src/assets/icons/card-back.png");
    cardImage.setAttribute("data-id", IdCard);
    cardImage.classList.add("card");

    if (fieldSide === state.playerSides.player1){
        cardImage.addEventListener("click",() =>{
            setCardsField(cardImage.getAttribute("data-id"));
        });

        cardImage.addEventListener("mouseover", () => {
            drawSelectCard(IdCard);
        });
    }

    return cardImage;

}

async function setCardsField(cardID){
    await removeAllCardsImages();

    let computerCardId = await getRandomCardId();

    state.filedCards.player.style.display = "block";
    state.filedCards.computer.style.display = "block";

    state.filedCards.player.src = cardData[cardID].img;
    state.filedCards.computer.src = cardData[computerCardId].img;


    let duelResults = await checkDuelResults(cardID,computerCardId);

    await updateScore();
    await drawButton(duelResults);


}


async function drawButton(text){
    state.actions.button.innerText = text;
    state.actions.button.style.display = "block"; 
}

async function updateScore(){
    state.score.scoreBox.innerText = `Win : ${state.score.playerScore} | Lose : ${state.score.computerScore}`
}

async function checkDuelResults(playerCardId, computerCardId){
    let duelResults = "Empate";
    let playeCard = cardData[playerCardId];

    if(playeCard.WinOf.includes(computerCardId)){
        duelResults = "Ganhou!"
        state.score.playerScore ++
    }

    if(playeCard.LoseOf.includes(computerCardId)){
        duelResults = "Perdeu!"
        state.score.computerScore ++
    }

    return duelResults;
}





 async function removeAllCardsImages(){
    let {computerBox, playe1Box} = state.playerSides;
    let imgElements = computerBox.querySelectorAll("img");
    imgElements.forEach((img) => img.remove());
    
    imgElements = playe1Box.querySelectorAll("img");
    imgElements.forEach((img) => img.remove())
}

async function drawSelectCard(index){
    state.cardSprites.avatar.src = cardData[index].img;
    state.cardSprites.name.innerText = cardData[index].name;
    state.cardSprites.type.innerText = "Attribute : " + cardData[index].type
}


async function drawCards(cardNumbers, fieldSide){
    for (let i = 0; i < cardNumbers; i++) {
        const randomIdCard = await getRandomCardId();
        const cardImage = await createCardImage(randomIdCard,fieldSide);
    
        document.getElementById(fieldSide).appendChild(cardImage);
       
    }
}


function init(){
    drawCards(5,state.playerSides.player1);
    drawCards(5,state.playerSides.computer)
    
}


init();