const resetpage =document.getElementById("resetpage");
resetpage.addEventListener('click', () => {
    window.location.reload();
});

const content = document.getElementsByClassName("content")
for (let i=0; i < content.length; i++){
    if (content[i].tagName === "VIDEO"){
        content[i].addEventListener("mouseover", ()=>{
            content[i].play();
            content[i].loop();
            content[i].muted();
        });
        content[i].addEventListener("mouseleave", ()=>{
            content[i].pause();
            content[i].currentTime = 0;
        });
    };
};

const theme = document.getElementById("theme");
theme.addEventListener("click", () => {
    document.body.classList.toggle("lightmode");
    if (document.body.classList.contains("lightmode")) {
        sessionStorage.setItem("theme", "light");
    } else {
        sessionStorage.setItem("theme", "dark");
    }
});
document.addEventListener("DOMContentLoaded", () => {
    const theme = sessionStorage.getItem("theme");
    if (theme === "light") document.body.classList.add("lightmode");
});





