console.log ("Quer cadastrar um evento? ");
let resposta = "sim";
console.log (resposta);

if (resposta.toLowerCase() == "sim") {
    console.log ("Informe sua idade (em anos): ");
    let idade = 45;
    console.log (idade);
    if (idade < 18) {
        console.log ("PARA CADASTRAR EVENTO DEVE TER MAIS DE 18 ANOS!");
        } else {
            console.log ("Informe data (no formato YYYY/MM/DD): ");
            let dataEvento = 2021/02/13;
            let dataDoEvento = "13/02/2022";
            console.log (dataDoEvento);
            let dataAtual = new Date();
            
            if (dataEvento => dataAtual){
                console.log ("Informe palestrante: ");
                let palestrante = "Jéssica Santo";
                console.log ("Informe os participantes: ");
                let listaParticipantes = ["Participante1","Participante2","Participante3","Participante4","Participante5"];
                console.log (listaParticipantes);
                if (listaParticipantes.length > 100) {
                    console.log ("SÓ É POSSÍVEL CADASTRAR EVENTO COM ATÉ 100 PARTICIPANTES!");
                    
                } else {
                    console.log ("#####################\n\ EVENTO CADASTRADO!! \n\#####################\n\Data do evento: " + dataDoEvento + "\n\Palestrante: " + palestrante + "\n\Participantes: " + listaParticipantes);
                    

                }
                
            } else {
                console.log ("Você informou data anterior ou igual à data atual, por favor informe data futura!");
                
            }
        }
    }


