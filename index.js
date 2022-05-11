let primeiraCarta = 10;
let segundaCarta = 4;
let cards = [primeiraCarta, segundaCarta];
let sum = primeiraCarta + segundaCarta
let temBlackJack = false
let taVivo = true
message = ""

let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el")  //Outra maneira de pegar elementos do DOM // let sumEl = document.getElementById("sum-el");
let cardsEl = document.querySelector("#cards-el")

function startGame() {
    rendergame();
}


function rendergame() {
    // Condição: 
    if (sum < 21) {
        message = "Quer adicionar outra carta? 🤔 "
    } else if (sum === 21) {
        message = "BlackJack!🥳"
        temBlackJack = true
    } else {
        message = "Perdeu!😂😂😂"
        taVivo = false
    }

    // texto a ser mudado:
    messageEl.textContent = message;
    sumEl.textContent = "Soma: " + sum
    cardsEl.textContent = "Cartas: " + cards[0] + ", " + cards[1]
}

function newCard() {
    console.log("Gerando outra carta")
    let card = 7
    sum += card
    rendergame()
}