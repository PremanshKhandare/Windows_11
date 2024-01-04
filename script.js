let taskbar = document.getElementsByClassName("taskbar")[0]
let startmenu = document.getElementsByClassName("startmenu")[0]

taskbar.addEventListener("click", ()=>{
    console.log("clicked");
    if(startmenu.style.bottom == "70px"){
        startmenu.style.bottom = "-630px"
    }
    else{
        startmenu.style.bottom = "70px"
    }
})