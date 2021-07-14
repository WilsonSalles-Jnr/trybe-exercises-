const estados = document.getElementById('estados');
const uf = ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RO", "RS", "RR", "SC", "SE", "SP", "TO"];

function addUf(){
    for (let i = 0; i < uf.length; i += 1){
        let opt = document.createElement('option');
        opt.innerText = uf[i]
        estados.appendChild(opt)
    }
}
addUf()