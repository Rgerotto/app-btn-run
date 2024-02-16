
function run(){
    const btnNo = document.getElementById("no")
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    const maxX = windowWidth - btnNo.offsetWidth;
    const maxY = windowHeight - btnNo.offsetHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    btnNo.style.left = randomX + "px";
    btnNo.style.top = randomY + "px";
}
