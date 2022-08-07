export {} 

let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma')! as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo');

let saldo = 0

function somarAoSaldo(soma: number) {
    if (campoSaldo) {
        saldo += soma
        campoSaldo.innerHTML = saldo.toString();
        
    }
}


function limparSaldo() {
    if (campoSaldo) {
        
        campoSaldo.innerHTML = "0";
    }
}

if (botaoAtualizar) {
    botaoAtualizar.addEventListener('click', () => {
        somarAoSaldo(Number(soma.value)); 
    });
}
botaoLimpar?.addEventListener('click', () => {
    limparSaldo();
});