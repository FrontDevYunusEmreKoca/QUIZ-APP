
function Quiz (sorular){
    this.sorular = sorular;
    this.SoruIndex = 0;
}

Quiz.prototype.SoruGetir = function (){
    return this.sorular[this.SoruIndex];
}
