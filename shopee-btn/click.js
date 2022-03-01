const clicked = document.querySelector(".btn");
const showed = document.querySelector(".new-request");
//open the modal

clicked.addEventListener("click",()=>{
    showed.classList.add("open");
    clicked.classList.add("hide");
    console.log(showed);
});

///close the modal

showed.addEventListener("click",(e)=>{
    if(e.target.classList.contains("new-request")){
        showed.classList.remove("open");
        clicked.classList.remove("hide");
    }
})