// **** FUNÇÃO PARA ADICIONAR AS BANDEIRAS E HORARIOS DOS JOGOS NOS CARDS
const game = (player1 , hour, player2) => {
    return`
    <li>
        <img src="./src/img/icon-${player1}.svg" alt="Bandeira do ${player1}">
        <strong>${hour}</strong>
        <img src="./src/img/icon-${player2}.svg" alt="Bandeira da ${player2}">
    </li>
    `
}


let dalay = -0.6;

// ********* FUNÇÃO PRA ADICIONAR DE FORMA DINAMICA AS DATAS DOS JOGOS
function creatcard(date, day, games) {
    dalay = dalay + 0.6;
    return`
    <div class="card" style="animation-delay: ${dalay}s">
            <h2>${date} <span>${day}</span></h2>
            <ul>
                ${games}
            </ul>
        </div>
    `
}

document.querySelector("#cards").innerHTML =

    // ************   CARDE DO PRIMEIRO DIA DE JOGO
        creatcard("24/11", "quinta", game
        ('brazil', '16:00', 'serbia')
        ) +

        // ************   CARDE DO SEGUNDO DIA DE JOGO
        creatcard("28/11", "segunda", 
        game('southKorea', '10:00', 'cameroon') +
        game('switzerland', '13:00', 'brazil') + 
        game('portugal', '16:00', 'uruguay')
        ) +

        // ************   CARDE DO TERCEIRO DIA DE JOGO
        creatcard("02/12", "sexta", game
        ('brazil', '16:00', 'cameroon')
        )
