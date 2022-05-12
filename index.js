let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
message = ""
let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el")  //Outra maneira de pegar elementos do DOM // let sumEl = document.getElementById("sum-el");
let cardsEl = document.querySelector("#cards-el")

let player = {
    name: "Jogador",
    chips: 145   
}


let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips


function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber > 10) {
        return 10 
        } else if (randomNumber === 1) {
            return 11
        } else {
            return randomNumber
        }
    }
function startGame() {
    isAlive = true
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    rendergame()
}
function rendergame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Soma: " + sum
    // Condição:
    if (sum < 21) {
        message = "Quer adicionar outra carta? 🤔 "
    } else if (sum === 21) {
        message = "BlackJack!🥳"
        hasBlackJack = true
    } else {
        message = "Perdeu!😂😂😂"
        isAlive = false
    }

    // texto a ser mudado:
    messageEl.textContent = message;
}
function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        console.log(cards)
        rendergame()
    }
}