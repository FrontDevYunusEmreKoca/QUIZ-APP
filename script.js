const quiz = new Quiz(sorular);


function SoruGoster (soru){
    let question = `<span> ${soru.soruMetni}</span>`;
    let options = ``;
    for (let  cevap in soru.cevapSecenekleri){
        options += `
        <div class="option">
            <span><b>${cevap}</b>: ${soru.cevapSecenekleri[cevap]}</span>
        </div>
       
        `;
    }
 


    document.querySelector(".question-text").innerHTML = question;
    
    options_list.innerHTML = options;

    const option = options_list.querySelectorAll(".option");
    
  
    for (let opt of option){
       opt.setAttribute("onclick", "optionSelected(this)")
    }

}


///
// for (let s of sorular){
//     console.log (s.soruMetni);
// };

       
// console.log(soru2.soruMetni);
// console.log(soru2.cevapSecenekleri);
// console.log(soru2.dogruCevap);

document.querySelector(".btn-start").addEventListener("click",function(){
   
        document.querySelector(".quiz-box").classList.add("active");
        SoruGoster(quiz.SoruGetir());
        SoruSayisiGoster(quiz.SoruIndex +1, quiz.sorular.length );
        document.querySelector(".next-btn").classList.remove("show");      
})
document.querySelector(".next-btn").addEventListener("click" ,function (){
    if (quiz.sorular.length != quiz.SoruIndex + 1){
        quiz.SoruIndex +=1;
        SoruGoster(quiz.SoruGetir());
        SoruSayisiGoster(quiz.SoruIndex +1, quiz.sorular.length );
        document.querySelector(".quiz-box").classList.add("active")
        SoruGoster(quiz.SoruGetir());
        document.querySelector(".next-btn").classList.remove("show")
      
    }
    else {
      alert ("Quiz Bitti.")
    }
})

const options_list = document.querySelector(".options_list");
const correct_icon = `<div class="icon">
<div class="fas fa-check"></div>
</div>`;
const incorrect_icon = `<div class="icon">
<div class="fas fa-times"></div>
</div>`;


function optionSelected(option){
   let cevap = option.querySelector("span b").textContent;
   let soru = quiz.SoruGetir();
  
   
   if (soru.cevabiKontrolEt(cevap)){
    option.classList.add("correct");
    option.insertAdjacentHTML("beforeend", correct_icon)
   }
   else {
     option.classList.add("incorrect");
     option.insertAdjacentHTML("beforeend", incorrect_icon)
   }
   for (let i=0; i<options_list.children.length; i++){
    options_list.children[i].classList.add("disabled")
   }
   document.querySelector(".next-btn").classList.add("show");
}


function SoruSayisiGoster (SoruSirasi, toplamSoruSayisi){
    let tag = `<span class="badge bg-warning">${SoruSirasi} / ${toplamSoruSayisi} </span>`;
    document.querySelector(".quiz-box .question_index").innerHTML = tag;
}