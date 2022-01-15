let overlay_El = document.getElementById("overlay");
let aside_modal_card_El = document.getElementById("aside_modal_card")
let modal_close_btn_El = document.getElementById("modal_close_btn")
let aside_link_on_El = document.getElementById("aside_link_on")
let aside_link_off_El = document.getElementById("aside_link_off")


// BUTTON LISTENING
aside_link_on_El.addEventListener("click", ()=>{
    overlay_El.classList.remove("hidden")
    aside_modal_card_El.classList.remove("hidden")
})


// CLOSE BUTTON LISTENING 
modal_close_btn_El.addEventListener("click", ()=>{
    aside_modal_card_El.classList.add("hidden")
    overlay_El.classList.add("hidden")
})


document.addEventListener("keydown", (e)=>{
   if(e.target.classList[0] == "overlay"){
       overlay_El.classList.add("hidden")
    aside_modal_card_El.classList.add("hidden")
   }
})

document.addEventListener("keydown", (e)=>{
    console.log(e);
    if(e.keyCode == 27 || e.keyCode == 46 || e.keyCode === 13){
        overlay_El.classList.add("hidden")
        aside_modal_card_El.classList.add("hidden")
    }
})

