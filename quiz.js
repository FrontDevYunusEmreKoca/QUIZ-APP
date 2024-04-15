//OOP NESNE TABANLI PROGRAMLAMA
//OBJECT

// let soru = {
//     soruMetni : "Hangisi bir js paket yonetim uygulamasidir",
//     cevapSecenekleri : {
//         a:"Node Js",
//         b: "TypeScript",
//         c:"Npm"
//     },
//     dogruCevap :"c",
//     cevabiKontrolEt: function (cevap){
//         return cevap ===this.dogruCevap // burdaki this demek sorunun icerisindeki dogrucevap ile function cedvabini karsilastirmaya yarar.
//     }
// }



// let soru2 = {
//     soruMetni : "Hangisi bir .net paket yonetim uygulamasidir",
//     cevapSecenekleri : {
//         a:"Node Js",
//         b: "Nuget",
//         c:"Npm"
//     },
//     dogruCevap :"b",
//     cevabiKontrolEt: function (cevap){
//         return cevap ===this.dogruCevap // burdaki this demek sorunun icerisindeki dogrucevap ile function cedvabini karsilastirmaya yarar.
//     }
// }



//  console.log(soru.soruMetni);
//  console.log(soru.cevabiKontrolEt("a"));
//  console.log(soru2.soruMetni);
//  console.log(soru2.cevabiKontrolEt("b"));

// sinif, Constructor => Nesne * 30
// ES5, ES6, ES7


// constructor tanimladigimizdan dolayi yani ana kalip oldugu icin buyuk harfle tanimladik.
function Soru (soruMetni,cevapSecenekleri, dogruCevap) {  
     this.soruMetni = soruMetni;
     this.cevapSecenekleri = cevapSecenekleri;
     this.dogruCevap = dogruCevap;
   
    //  console.log(this)
};

Soru.prototype.cevabiKontrolEt = function (cevap){ // burada prototype in altina almis olduk fonksiyonlari/ objenin altindaki prototype 
    return cevap === this.dogruCevap;
};
///////



//sorulari gormek icin 

// let soru1 = new Soru("Hangisi bir js paket yonetim uygulamasidir", {a: "Node Js", b:"TypeScript",c:"Npm", }, "c")
// let soru2 = new Soru("Hangisi bir .net paket yonetim uygulamasidir", {a: "Node Js", b:"Nuget",c:"Npm"}, "b")


let sorular =[
    new Soru("1- Hangisi bir js paket yonetim uygulamasidir", {a: "Node Js", b:"TypeScript",c:"Npm", d:"Nuget"}, "c"),
     new Soru("2- Hangisi bir .net paket yonetim uygulamasidir", {a: "Node Js", b:"Nuget",c:"Npm"}, "a"),
     new Soru("3- Hangisi bir .net paket yonetim uygulamasidir", {a: "Node Js", b:"Nuget",c:"Npm"}, "c"),
     new Soru("4- Hangisi bir .net paket yonetim uygulamasidir", {a: "Node Js", b:"Nuget",c:"Npm"}, "c"),
     new Soru("5- Hangisi bir .net paket yonetim uygulamasidir", {a: "Node Js", b:"Nuget",c:"Npm"}, "c")
];

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

function Quiz (sorular){
    this.sorular = sorular;
    this.SoruIndex = 0;
}

Quiz.prototype.SoruGetir = function (){
    return this.sorular[this.SoruIndex];
}


const quiz = new Quiz(sorular);




document.querySelector(".btn-start").addEventListener("click",function(){
   
        document.querySelector(".quiz-box").classList.add("active");
        SoruGoster(quiz.SoruGetir());
        document.querySelector(".next-btn").classList.remove("show");      
})
document.querySelector(".next-btn").addEventListener("click" ,function (){
    if (quiz.sorular.length != quiz.SoruIndex + 1){
        quiz.SoruIndex +=1;
        SoruGoster(quiz.SoruGetir());
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
