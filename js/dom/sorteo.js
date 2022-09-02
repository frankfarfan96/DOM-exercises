const d = document,
l = function (arg) {console.log(arg)}

export default function draw(btn, selector) {
    const getWinner = (selector) => {
        const $players = d.querySelectorAll(selector),
        random = Math.floor(Math.random() * $players.length),
        winner = $players[random]

        l(random)

        return `El ganador es: ${winner.textContent}`
    }

    d.addEventListener("click", e => {
        if(e.target.matches(btn)) {
            let result = getWinner(selector);
            alert(result); 
            l(result);
        }
    })
}
/*************** Para implementar en cualquier sitio **************
const getWinnerComment = (selector) => {
    const $players = document.querySelectorAll(selector),
    random = Math.floor(Math.random() * $players.length),
    winner = $players[random]

    return `El ganador es: ${winner.textContent}`
}

getWinnerComment("ytd-comment-renderer #author span");*/