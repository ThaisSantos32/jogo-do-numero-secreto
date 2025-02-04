
// criando a lista
let listaDeNumerosSorteados= [];

let numeroLimite=10;
let numeroSecreto= gerarNumero();
let tentativas=1;

function gerarNumero(){
    let numeroEscolhido= parseInt(Math.random()*4+1);
    let quantidadeDeNumerosNaLista= listaDeNumerosSorteados.length;
    if (quantidadeDeNumerosNaLista==numeroLimite){
        listaDeNumerosSorteados= [];
    }
     // includes verifica se o numéro escolhido já está na lista
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
         return gerarNumero();
    }
    else {
        //push adiciona na lista
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log (listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}
function exibirTextoNatela(tag, texto) {
    let campo= document.querySelector(tag);
    campo.innerHTML= texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}
exibirMensagemInicial();

function verificarChute (){
    // pegando o valor que digitarem no input
    let chute= document.querySelector('input').value;
    let mensagemTentativas= tentativas==1? 'tentativa': 'tentativas';
    let mensagem=`Você acertou com ${tentativas} ${mensagemTentativas}`;
    if (chute==numeroSecreto){
      exibirTextoNatela('h1', 'ACERTOU! ');
      exibirTextoNatela('p', mensagem);
      document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else {
        if (chute> numeroSecreto){
            exibirTextoNatela('p','O número é menor!');
        }
     else{
         exibirTextoNatela('p','O número é maior!');
     }   
    }
    tentativas++;
    limparCampo();
}
function exibirMensagemInicial(){
    exibirTextoNatela('h1','Jogo do número secreto');
    exibirTextoNatela('p', 'Digite um número de 1 a 10:');
}
function limparCampo(){
    chute= document.querySelector('input');
    chute.value='';
}
// função pra reiniciar jogo
function reiniciarJogo(){
  numeroSecreto= gerarNumero();
  limparCampo();
  exibirMensagemInicial();
  tentativas=1;
  // habilitando a versão desativada do botão enquando o jogador joga nova partida
  document.getElementById('reiniciar').setAttribute('disabled',true);



}



