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

let soru1 = new Soru("Hangisi bir js paket yonetim uygulamasidir", {a: "Node Js", b:"TypeScript",c:"Npm", }, "c")
let soru2 = new Soru("Hangisi bir .net paket yonetim uygulamasidir", {a: "Node Js", b:"Nuget",c:"Npm"}, "b")


let sorular =[
    new Soru("1- Hangisi bir js paket yonetim uygulamasidir", {a: "Node Js", b:"TypeScript",c:"Npm", d:"Nuget"}, "a"),
     new Soru("2- Hangisi bir .net paket yonetim uygulamasidir", {a: "Node Js", b:"Nuget",c:"Npm"}, "b"),
     new Soru("3- Hangisi bir .net paket yonetim uygulamasidir", {a: "Node Js", b:"Nuget",c:"Npm"}, "b"),
     new Soru("4- Hangisi bir .net paket yonetim uygulamasidir", {a: "Node Js", b:"Nuget",c:"Npm"}, "b"),
     new Soru("5- Hangisi bir .net paket yonetim uygulamasidir", {a: "Node Js", b:"Nuget",c:"Npm"}, "b")
];

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
    if (quiz.sorular.length != quiz.SoruIndex){
        document.querySelector(".quiz-box").classList.add("active")
        SoruGoster(quiz.SoruGetir());
        quiz.SoruIndex += 1;
    }
    else {
      alert ("Quiz Bitti.")
    }
   
})
document.querySelector(".next-btn").addEventListener("click" ,function (){
    if (quiz.sorular.length != quiz.SoruIndex){
        document.querySelector(".quiz-box").classList.add("active")
        SoruGoster(quiz.SoruGetir());
        quiz.SoruIndex += 1;
    }
    else {
      alert ("Quiz Bitti.")
    }
})

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
    const options_list = document.querySelector(".options_list");
    document.querySelector(".question-text").innerHTML = question;
    
    options_list.innerHTML = options;

    const option = options_list.querySelectorAll(".option");

    for (let opt of option){
        opt.setAttribute("onclick", "optionSelected(this)")
    }

}
function optionSelected (option){
   let cevap = option.querySelector("span b").textContent
   let soru = quiz.SoruGetir();

   if(soru.cevabiKontrolEt(cevap)){
    option.classList.add("correct")
   }
   else {
    option.classList.add("incorrect")
   }
}
       