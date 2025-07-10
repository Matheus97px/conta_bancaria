import readLine = require('readline-sync');
import { colors } from './src/util/Colors';
import { Conta } from './src/model/Conta';
import { ContaCorrente } from './src/model/ContaCorrente';
import { ContaPoupanca } from './src/model/ContaPoupanca';

export function main() {

    let opcao: number;

    const conta: Conta = new Conta(1, 123, 1, "Renato", 10000);
    conta.visualizar();
    conta.sacar(10500);
    conta.visualizar();
    conta.depositar(5000);
    conta.visualizar();

    const contaCorrente: ContaCorrente = new ContaCorrente(2, 123, 1, "Luciana", 15000, 1000);
    contaCorrente.visualizar();
    contaCorrente.sacar(2000);
    contaCorrente.visualizar();
    contaCorrente.depositar(1000);
    contaCorrente.visualizar();

    const contaPoupanca: ContaPoupanca = new ContaPoupanca(3, 123, 2, "Joaquim", 1000, 10);
    contaPoupanca.visualizar();
    contaPoupanca.sacar(200);
    contaPoupanca.visualizar();
    contaPoupanca.depositar(1000);
    contaPoupanca.visualizar();



    while (true) {

        console.log(colors.bg.white, colors.fg.magentastrong);
        console.log(`-----------------------------------------------------`);
        console.log(`                                                     `);
        console.log(`                    *NULLBANK*                       `);
        console.log(`                                                     `);
        console.log(`_____________________________________________________`);
        console.log(`                                                     `);
        console.log(`            1 - Criar Conta                          `);
        console.log(`            2 - Listar todas as Contas               `);
        console.log(`            3 - Buscar Conta por Numero              `);
        console.log(`            4 - Atualizar Dados da Conta             `);
        console.log(`            5 - Apagar Conta                         `);
        console.log(`            6 - Sacar                                `);
        console.log(`            7 - Depositar                            `);
        console.log(`            8 - Transferir valores entre Contas      `);
        console.log(`            9 - Sair                                 `);
        console.log(`                                                     `);
        console.log(`-----------------------------------------------------`);
        console.log(colors.reset);

        console.log(`Entre com a opção desejada: `);
        opcao = readLine.questionInt("");

        if (opcao == 9) {
            console.log(colors.fg.magentastrong,
                `\nNULLBANK - Aqui, o limite é....nulo.`);
            sobre();
            console.log(colors.reset, ``);
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log(colors.fg.whitestrong, `\n\nCriar Conta\n\n`, colors.reset);

                keyPress()
                break;
            case 2:
                console.log(colors.fg.whitestrong, `\n\nListar todas as Contas\n\n`, colors.reset);

                keyPress()
                break;
            case 3:
                console.log(colors.fg.whitestrong, `\n\nConsultar dados da Conta - por número\n\n`, colors.reset);

                keyPress()
                break;
            case 4:
                console.log(colors.fg.whitestrong, `\n\nAtualizar dados da Conta\n\n`, colors.reset);

                keyPress()
                break;
            case 5:
                console.log(colors.fg.whitestrong, `\n\nApagar uma Conta\n\n`, colors.reset);

                keyPress()
                break;
            case 6:
                console.log(colors.fg.whitestrong, `\n\nSaque\n\n`, colors.reset);

                keyPress()
                break;
            case 7:
                console.log(colors.fg.whitestrong, `\n\nDepósito\n\n`, colors.reset);

                keyPress()
                break;
            case 8:
                console.log(colors.fg.whitestrong, `\n\nTransferêmcia entre Contas\n\n`, colors.reset);

                keyPress()
                break;
            default:
                console.log(colors.fg.whitestrong, `\nOpção Inválida!\n`, colors.reset);

                keyPress()
                break;
        }
    }

}



export function sobre(): void {
    console.log(`\n------------------------------------------------------------------------------------------`);
    console.log(`
.:::     .::.::     .::.::      .::      .:: .::         .:       .:::     .::.::   .::  
.: .::   .::.::     .::.::      .::      .:    .::      .: ::     .: .::   .::.::  .::   
.:: .::  .::.::     .::.::      .::      .:     .::    .:  .::    .:: .::  .::.:: .::    
.::  .:: .::.::     .::.::      .::      .::: .:      .::   .::   .::  .:: .::.: .:      
.::   .: .::.::     .::.::      .::      .:     .::  .:::::: .::  .::   .: .::.::  .::   
.::    .: ::.::     .::.::      .::      .:      .: .::       .:: .::    .: ::.::   .::  
.::      .::  .:::::   .::::::::.::::::::.:::: .:: .::         .::.::      .::.::     .::
                                                                                          `)
    console.log(colors.fg.whitestrong, `\nProjeto Desenvolvido por: Matheus Pereira Xavier`);
    console.log(`\nEmail: matheus97p.q@gmail.com`);
    console.log(`\nGitHub: github.com/Matheus97px`, colors.reset);
    console.log(`\n------------------------------------------------------------------------------------------`);
}

function keyPress(): void {
    console.log(colors.reset, ``);
    console.log(`\nPressione enter para continuar...`);
    readLine.prompt();
}


main();

