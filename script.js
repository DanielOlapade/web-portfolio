const resetpage =document.getElementById("resetpage");
const content =document.getElementsByClassName("content");

resetpage.addEventListener('click', () => {
    window.location.reload();
});

for (let i = 0; i < content.length; i++) {
    content[i].addEventListener("mouseover", () => {
        content[i].play();
        content[i].loop = true;
        content[i].muted = true;
    });
    content[i].addEventListener("mouseout", () => {
        content[i].pause();
        content[i].currentTime = 0;
    });
}





