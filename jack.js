let cards=[]
let sum=0
let hasBlackJack=false
let isAlive=false
let message=""
let messageEl=document.getElementById("message-el")
let sumEl=document.getElementById("sum-el")
let cardEl=document.getElementById("cards-el")

let player = {
    name: "Sullivan",
    chips: 666
}
let playerEl =document.getElementById("player-el")
playerEl.textContent=player.name +": $" + player.chips
function getRandomCard() {
    let randomNumber=Math.floor(Math.random() * 13) + 1
    if (randomNumber > 10) {
        return 10
    }
    else if (randomNumber===1) {
        return 11
    }
    else {
        return randomNumber
    }
    
}

function startGame() {
    isAlive=true
    firstCard=getRandomCard()
    secondCard=getRandomCard()
    cards=[firstCard, secondCard]
    sum=firstCard+secondCard
    renderGame()
}

function renderGame() {
    cardEl.textContent="Cards: "
    for(let i=0;i<cards.length;i++){
        cardEl.textContent+= cards[i] + " "
    }
    sumEl.textContent="Sum: "+sum
    if(sum<21){
        message="DO YOU WANT TO DRAW A NEW CARD"
    }
    else if(sum===21){
        message="yahooooo!, You've got a BlackJack"
    }
    else{
        message="YOU ARE OUT OF THE GAME"
        isAlive=false
    }
    messageEl.textContent=message
}

function newcard() {
    if (isAlive && !hasBlackJack) {
        let card=getRandomCard()
        cards.push(card)
        sum+=card
        renderGame()
    }
}