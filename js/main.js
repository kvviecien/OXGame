const web = {
    init: function () {
        let p1inp = document.getElementById('player1Name');
        let p2inp = document.getElementById('player2Name');
        let play = document.getElementById('play');
        let turn = document.getElementById('turn');
        let p1 = document.getElementsByClassName('player-1-name')[0];
        let p2 = document.getElementsByClassName('player-2-name')[0];
        let run = function () {
            p1.innerText = p1inp.value;
            p2.innerText = p2inp.value;
            let tab = [p1.innerText, p2.innerText];
            let who = tab[Math.floor(Math.random() * 2)]
            turn.innerText = who;
            window.scrollTo(0, window.innerHeight);
        }
        play.addEventListener('click', run);
    }
}