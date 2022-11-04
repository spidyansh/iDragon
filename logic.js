dino = document.querySelector(".dino")
obstacle = document.querySelector(".obstacle")
gameover = document.querySelector(".gameover")
obstacleani = document.querySelector(".obstacleani")
let score = document.querySelector(".score")

i = 0;
document.addEventListener('keydown', function (e) {
    // console.log(e.key , e.code)
    if (e.key == "ArrowUp") {
        dino.classList.add("animatedino")
        setTimeout(() => {
            dino.classList.remove("animatedino")
        }, 700)
        score.innerHTML= i++
    }
})
// setInterval(() => {
//     dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue("left"))
//     dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue("bottom"))

//     ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
//     oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('bottom'));

//     offsetX =Math.abs(dx-ox)
//     offsetY =Math.abs(dy-oy)

//     console.log(ox,oy)

//     if (ox==0 && offsetY ==0) {
//         console.log("game over")
//         gameover.style.visibility = "visible"
//         obstacle.classList.remove("obstacleani")
//     }
// },100);
