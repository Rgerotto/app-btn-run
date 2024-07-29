function run() {
    const btnNo = document.getElementById("no");
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    const maxX = windowWidth - btnNo.offsetWidth;
    const maxY = windowHeight - btnNo.offsetHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    btnNo.style.left = randomX + "px";
    btnNo.style.top = randomY + "px";
}

function popUp() {
    const paragraph = document.getElementById('paragraph');
    const btnNo = document.getElementById('no');
    paragraph.classList.remove('hidden');
    btnNo.style.display = 'none'; // Hides the "Another candidate" button

    const btnDiv = document.querySelector('.btn-div');
    btnDiv.style.justifyContent = 'center'; // Center the remaining button
}
