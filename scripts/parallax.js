const bg = document.querySelector('.welcome')

let targetX = 0.5
let currentX = 0.5
const smoothness = 0.025
const range = 20

document.addEventListener('mousemove', e => {
    targetX = e.clientX / window.innerWidth
})

function animate(){
    currentX += (targetX - currentX) * smoothness
    const move = (currentX - 0.5) * range
    bg.style.backgroundPosition = `${50 + move}% center`

    requestAnimationFrame(animate)
}
animate()