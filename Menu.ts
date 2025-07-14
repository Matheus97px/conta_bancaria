import readLine = require('readline-sync');
import { colors } from './src/util/Colors';
import { ContaCorrente } from './src/model/ContaCorrente';
import { ContaPoupanca } from './src/model/ContaPoupanca';
import { ContaController } from './src/controller/ContaController';

export function main() {

    // Instancia da classe ContaController
    let contas: ContaController = new ContaController();

    // Variáveis Auxiliares
    let opcao, numero, agencia, tipo, saldo, limite, aniversario: number;
    let titular: string;
    const tiposContas = ['Conta Corrente', 'Conta Poupanca'];

    console.log("\nCriar Contas\n");

    let cc1: ContaCorrente = new ContaCorrente(contas.gerarNumero(), 123, 1, "João da Silva", 1000, 100.0);
    contas.cadastrar(cc1);

    let cc2: ContaCorrente = new ContaCorrente(contas.gerarNumero(), 124, 1, "Maria da Silva", 2000, 100.0);
    contas.cadastrar(cc2);

    let cp1: ContaPoupanca = new ContaPoupanca(contas.gerarNumero(), 125, 2, "Mariana dos Santos", 4000, 12);
    contas.cadastrar(cp1);

    let cp2: ContaPoupanca = new ContaPoupanca(contas.gerarNumero(), 125, 2, "Juliana Ramos", 8000, 15);
    contas.cadastrar(cp2);

    contas.listarTodas();



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

                console.log('Digite o Número da agência: ');
                agencia = readLine.questionInt('');

                console.log('Digite o Nome do Titular da Conta: ');
                titular = readLine.question('');

                console.log('\nDigite o tipo da Conta: ');
                tipo = readLine.keyInSelect(tiposContas, '', { cancel: false }) + 1;

                console.log('\nDigite o Saldo da conta (R$): ');
                saldo = readLine.questionFloat('');

                switch (tipo) {
                    case 1:
                        console.log('Digite o limite da Conta (R$): ');
                        limite = readLine.questionFloat('');
                        contas.cadastrar(
                            new ContaCorrente(contas.gerarNumero(), agencia, tipo, titular, saldo,
                                limite));
                        break;
                    case 2:
                        console.log('Digite o dia do aniversário da Conta Poupança: ');
                        aniversario = readLine.questionInt('');
                        contas.cadastrar(new ContaPoupanca(contas.gerarNumero(), agencia, tipo,
                            titular, saldo, aniversario));
                        break;
                }

                keyPress()
                break;
            case 2:
                console.log(colors.fg.whitestrong, `\n\nListar todas as Contas\n\n`, colors.reset);

                contas.listarTodas();

                keyPress()
                break;
            case 3:
                console.log(colors.fg.whitestrong, `\n\nConsultar dados da Conta - por número\n\n`, colors.reset);

                console.log('Digite o número da Conta: ');
                numero = readLine.questionInt('');
                contas.procurarPorNumero(numero);

                keyPress()
                break;
            case 4:
                console.log(colors.fg.whitestrong, `\n\nAtualizar dados da Conta\n\n`, colors.reset);

                console.log('Digite o número da Conta: ');
                numero = readLine.questionInt('');

                let conta = contas.buscarNoArray(numero);

                if (conta != null) {

                    console.log('Digite o Número da agência: ');
                    agencia = readLine.questionInt('');

                    console.log('Digite o Nome do Titular da conta: ');
                    titular = readLine.question('');

                    tipo = conta.tipo;

                    console.log('\nDigite o Saldo da conta (R$): ');
                    saldo = readLine.questionFloat('');

                    switch (tipo) {
                        case 1:
                            console.log('Digite o Limite da Conta (R$): ');
                            limite = readLine.questionFloat('');
                            contas.atualizar(
                                new ContaCorrente(numero, agencia, tipo, titular, saldo, limite));
                            break;
                        case 2:
                            console.log('Digite o Dia do aniversário da Conta Poupança: ');
                            aniversario = readLine.questionInt('');
                            contas.atualizar(
                                new ContaPoupanca(numero, agencia, tipo, titular, saldo,
                                    aniversario));
                            break;
                    }

                }  else {
                    console.log(colors.fg.red,'\nA Conta numero: ' + numero + 
                        ' nao foi encontrada!', colors.reset);
                }

                keyPress()
                break;
            case 5:
                console.log(colors.fg.whitestrong, `\n\nApagar uma Conta\n\n`, colors.reset);

                console.log('Digite o número da Conta: ');
                numero = readLine.questionInt('');
                contas.deletar(numero);
                
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

