const entrada = require ('prompt-sync')({sigint: true});
const dataDoEvento = require ('prompt-sync')({sigint: true});
let listaParticipantes = [];

let resposta = entrada ("Quer consultar algum evento? ");

if (resposta.toLowerCase() == "sim") {
    resposta = entrada ("Consultar por data? ");

    if (resposta.toLowerCase() == "sim") {
        let dataEvento = dataDoEvento ("Informe data (no formato YYYY,MM,DD): ");
        let novaDataEvento = new Date(dataEvento);
        // parte do algoritmo que buscará, no BD, os dados do evento a partir da data (conteúdo da variável novaDataEvento).
        console.log ("O evento de " + novaDataEvento.getDate() + "/" + (novaDataEvento.getMonth () + 1 ) + "/" + novaDataEvento.getFullYear() + " foi/será:\n\[aqui estariam dados do evento resgatados do banco de dados]" );

    } else {
        resposta = entrada ("Consultar por palestrante? ");

        if (resposta.toLowerCase() == "sim") {
            resposta = entrada ("Informe palestrante: ");
            // parte do algoritmo que buscará, no BD, os dados do evento a partir do palestrante (conteúdo da variável resposta).
            console.log ("O evento do palestrante " + resposta + " foi/será:\n\[aqui estariam dados do evento resgatados do banco de dados]" );

        } else {
            resposta = entrada ("Consultar por participante? ");

            if (resposta.toLowerCase() == "sim"){
                resposta = entrada ("Informe o participante: ");
                // parte do algoritmo que buscará, no BD, os dados do evento a partir de um participante (conteúdo da variável resposta).
                console.log ("O evento com o participante " + resposta + " foi/será:\n\[aqui estariam dados do evento resgatados do banco de dados]" );

            } else {
                console.log ("ESGOTARAM-SE AS OPÇÕES DE CONSULTA A EVENTO!");
            }
        }
    }

} else {
    resposta = entrada ("Quer cadastrar um evento? ");

    if (resposta.toLowerCase() == "sim") {
        resposta = entrada ("Informe sua idade: ");
        let idade = resposta.replace(/[^0-9]/g,'');

        if (idade < 18) {
            console.log ("PARA CADASTRAR EVENTO DEVE TER MAIS DE 18 ANOS!");

        } else {
            dataEvento = dataDoEvento ("Informe data (no formato YYYY,MM,DD): ");
            novaDataEvento = new Date(dataEvento);
            let dataHoje = new Date ();
            let novaDataHoje = dataHoje;

            if (dataHoje.getTime() > novaDataEvento.getTime()){
                console.log ("Você informou o dia " + novaDataEvento.getDate() + "/" + (novaDataEvento.getMonth () + 1 ) + "/" + novaDataEvento.getFullYear() + ", PARA CADASTRAR A DATA DO EVENTO DEVE SER FUTURA!\n\(Lembrete: hoje é dia " + novaDataHoje.getDate() + "/" + (novaDataHoje.getMonth () + 1 ) + "/" + novaDataHoje.getFullYear() + "!)");

            } else {
                resposta = entrada ("Informe palestrante: ");
                let palestrante = resposta;
                resposta = entrada("Informe o número de participantes: ");
                let numeroParticipantes = resposta.replace(/[^0-9]/g,'');
                
                if (numeroParticipantes > 100) {
                    console.log ("SÓ É POSSÍVEL CADASTRAR EVENTO COM ATÉ 100 PARTICIPANTES!");
                    
                } else {
                    while (listaParticipantes.length < 99 && resposta.toLowerCase() != "fim") {
                        resposta = entrada ("Digite o nome do participante (Quando quiser encerrar o cadastro de participantes basta digitar FIM no lugar do participante!): ");
                        let nomeParticipante = resposta;
                        
                        if (nomeParticipante.toLowerCase != "fim") {
                            let adicionar = listaParticipantes.push (nomeParticipante);
                        }
                        // Parte do algoritmo que gravará no BD os dados do evento.
                        
                    }
                    let ultimo = listaParticipantes.pop();
                    console.log ("#####################\n\ EVENTO CADASTRADO!! \n\#####################\n\Data do evento: " + novaDataEvento.getDate() + "/" + (novaDataEvento.getMonth () + 1 ) + "/" + novaDataEvento.getFullYear()  + "\n\Palestrante: " + palestrante + "\n\Participantes: " + listaParticipantes);

                }
            }
        }
    }
}

/*
MEMÓRIA DE CODIFICAÇÃO

Apresentar os dados inseridos do novo evento:
console.log ("Idade: " + idade + "\n\Data do evento: " + novaDataEvento.getDate() + "/" + (novaDataEvento.getMonth () + 1 ) + "/" + novaDataEvento.getFullYear()  + "\n\Palestrante: " + palestrante + "\n\Participantes: " + participante);

Comparar data do evento com data atual:
let dataEvento = dataDoEvento ("Informe data (no formato YYYY,MM,DD): ");
let novaDataEvento = new Date(dataEvento);
let dataHoje = new Date();
console.log (`Data hoje: ${dataHoje}`);
console.log (`Data evento: ${novaDataEvento}`);
if (dataHoje.getTime() < novaDataEvento.getTime()){
    console.log ("Ok");
} else {
    console.log ("Ñ ok");
}

Obter data atual:
let dataHoje = Date();
console.log (dataHoje);
let novaDataHoje = new Date(dataHoje);
console.log ("A data de hoje é " + novaDataHoje.getDate() + "/" + (novaDataHoje.getMonth () + 1 ) + "/" + novaDataHoje.getFullYear());

Verificar datas:
console.log (`Data hoje: ${dataHoje}`);
console.log (`Data evento: ${novaDataEvento}`);
*/

