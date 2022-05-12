// Cria as variáveis:
let cards = []      // Array para cartas
let sum = 0         // sum comça com valor zero
let hasBlackJack = false  // confirma se fez Blackjack
let isAlive = false // confirma se a pessoa ainda está no jogo
let message = ""    // variável das mensagens reativas

        // liga os elementos do HTML nas seguintes variáveis:
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")


let player = {          
    name: "Jogador",    // Objeto criado para o Jogador
    chips: 145
}

let playerEl = document.getElementById("player-el")     // conecta variável ao elemento do jogador no HTML
playerEl.textContent = player.name + ": $" + player.chips  // muda o conteúdo do nome para o conteúdo que foi posto no objeto "player"


// Agora, criaremos as funções que foram invocadas aos botões serem clicados pelo usuário

function getRandomCard() {     // Função para gerar carta aleatória
    let randomNumber = Math.floor(Math.random() * 13) + 1 // o + 1 é importante para não obtermos 0, por exemplo
    if (randomNumber > 10) {   // Para cada número aleatório maior que 10, como no blackjack, terá seu valor em 10
        return 10
        } else if (randomNumber === 1) { // Se o número for 1, também funcionará como 11
            return 11
        } else {
            return randomNumber
        }
    }

function startGame() {
    isAlive = true                      
    // Cria variáveis para duas cartas iniciais com a função randomCard():
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]     // Exibe as duas cartas no Array
    sum = firstCard + secondCard        // Adiciona as cartas na variável sum
    rendergame()        // Chama a função rendergame()
}

function rendergame() {
    cardsEl.textContent = "Cartas: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " " // Mostra nova carta ao lado das outras
    }
    sumEl.textContent = "Soma: " + sum
    
    // Condição:
    if (sum < 21) {
        message: "Quer adicionar outra carta? 🤔"
    } else if (sum === 21) {
        message = "Blackjack!!!!🥳"
        hasBlackJack = true
    } else {
        message = "Perdeu!😂😂😂"
        isAlive = false   // Termina a possibilidade de puxar mais cartas
    }

    messageEl.textContent = message;
}

// Cria função nova carta:
function newCard() {
    if (isAlive === true && hasBlackJack === false) { //possibilita continuar o jogo
        let card = getRandomCard()
        sum += card    //  Adiciona carta à soma
        cards.push(card)
        console.log(cards)
        rendergame()
    }
}
