
const calcular = document.getElementById("calcular");


function imc(){

    const nome = document.getElementById("nome").value;
    const peso = document.getElementById("peso").value;
    const altura = document.getElementById("altura").value;
    const resultado = document.getElementById('resultado');

    if(nome !=='' && peso !=='' && altura !==''){
        
        const valorIMC = (peso / (altura * altura)).toFixed(2);

        let classificacao = '';

        if(valorIMC <18.5){
            classificacao = 'abaixo do peso';
        }else if(valorIMC <25){
            classificacao = 'com o peso ideal, parabéns!';
        }else if(valorIMC <30){
            classificacao = 'com sobrepeso';
        }else if(valorIMC <40){
            classificacao = 'com obesidade';
        }else{
            classificacao = 'com obesidade mórbida!';
        }


        resultado.textContent = nome + " seu IMC é " + valorIMC + " e você está " + classificacao ;

    }else{
        resultado.textContent = 'Preencha todos os campos!'
    }

}

calcular.addEventListener('click',imc);
