/*
OBJETIVO 1 - quando o usuário clicar no botão de "veja o trailer", devemos abrir a modal com o vídeo do trailer.

- passo 1 - dar um jeito de pegar o elemento que representa o botão na tela usando o js.

- passo 2 - dar um jeito de identificar quando o usuário clicar no botão.

-passo 3 - dar um jeito de pegar o elemento da modal no js.

-passo 4 - abrir a modal na tela.



OBJETIVO 2 - quando o usuário clicar no "X", devemos fechar a modal.

-passo 1 - dar um jeito de pegar o elemento de fechar a modal no js.

-passo 2 - dar um jeito de identificar quando o usuário clicar no "X"

-passo 3 - fechar a modal
*/


const botaoTrailer = document.querySelector(".botao-trailer");
const video = document.getElementById("video");

botaoTrailer.addEventListener("click", () => {
    modal.classList.add("aberto");
    video.setAttribute("src", "https://www.youtube.com/embed/Cb4WV4aXBpk")

})

const modal = document.querySelector(".modal");

const botaoFecharModal = document.querySelector(".fechar-modal");

botaoFecharModal.addEventListener("click", () => {
    modal.classList.remove("aberto");
    video.setAttribute("src", "");
});