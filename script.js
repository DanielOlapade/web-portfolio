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
        });
        content[i].addEventListener("mouseleave", ()=>{
            content[i].pause();
            content[i].currentTime = 0;
        });
    };
};

const theme = document.getElementById("theme");
const themeopt = document.getElementById("themeopt");
theme.addEventListener("click", () => {
    document.body.classList.toggle("lightmode");
    if (document.body.classList.contains("lightmode")) {
        sessionStorage.setItem("theme", "light");
        themeopt.innerHTML = '<i class="fa-solid fa-moon"></i>';
    } else {
        sessionStorage.setItem("theme", "dark");
        themeopt.innerHTML = '<i class="fa-solid fa-sun">';
    }
});
document.addEventListener("DOMContentLoaded", () => {
    const theme = sessionStorage.getItem("theme");
    if (theme === "light") document.body.classList.add("lightmode");
});



const project1 = document.getElementById("project1")
project1.addEventListener("click", ()=> {
    window.open('Algorithmic Sports Analysis System\Algorithmic-Sports-Analysis-System.html', '_blank')
});
const project2 = document.getElementById("project2")
project2.addEventListener("click", ()=> {
    window.open('Biosensor Project\Biosensor-Project.html', '_blank')
});
const project3 = document.getElementById("project3")
project3.addEventListener("click", ()=> {
    window.open('STEM-based Exhibit - 2024\STEM-based-Exhibit.html', '_blank')
});
const project4 = document.getElementById("project4")
project4.addEventListener("click", ()=> {
    window.open('Agnora-Internship\Agnora-Internship.html','_blank')
});


const backup = document.getElementById("backup");
backup.addEventListener("click", () => {
    window.scroll({top: 0, behavior: "smooth"})
});




