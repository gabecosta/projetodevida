const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo")
for(let i=0; i<botoes.length; i++){
botoes[i].onclick = function(){
    textos[j].classList.remove("ativo")
for(let j=0; j<botoes.length; j++){
    textos[j].classList.remove("ativo")
botoes[j].classList.remove("ativo");
}
botoes[i].classList.add("ativo");
}
}