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
    new Soru("1- Hangisi bir javascript paket yönetim uygulamasıdır", {a: "Node Js", b:"TypeScript",c:"Npm", d:"Nuget"}, "c"),
     new Soru("2- Hangisi frontend kapsamında değerlendirilmez", {a: "Css", b:"HTML",c:"JavaScript" , d:"Sql"}, "d"),
     new Soru("3- Hangisi  backend kapsamında değerlendirilmez", {a: "Node Js", b:"TypeScript",c:"Angular" , d:"React"}, "a"),
     new Soru("4- Hangisi JavaScript programlama dilini bağlamaz", {a: "React Js", b:"Angular",c:"Vuev js" ,d:"Asp.net"}, "d")
];



