let requestbtn = document.querySelector("#btn_request");
let requestitem = document.querySelector(".list");
let pricebtn = document.querySelector("#btn_price");
let pricelist = document.querySelector(".table");


requestbtn.addEventListener("click", navigateto1, false);
pricebtn.addEventListener("click", navigateto2, false);


function navigateto1(e1) {
    requestitem.scrollIntoView({behavior: "smooth"});
}
function navigateto2(e2) {
    pricelist.scrollIntoView({behavior: "smooth"});
}
