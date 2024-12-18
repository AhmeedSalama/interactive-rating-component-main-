let ul = document.querySelectorAll('ul li');
let submit = document.querySelector("button");
let Howdid = document.querySelector(".Howdid")
let ThankYou = document.querySelector(".ThankYou")
let Youselected = document.querySelector(".Youselected")
ul.forEach((li) => {
    li.addEventListener("click", function(){
        ul.forEach((li)=> {
            li.classList.remove("selectedLi")
        })
        li.classList.add("selectedLi");
    })
});
submit.onclick = function (){
    Howdid.style.display= "none";
    ThankYou.style.display= "block";
    let number = document.querySelector("li.selectedLi");
    Youselected.textContent =`You selected ${number.textContent} out of 5`
}