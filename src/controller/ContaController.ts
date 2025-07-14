import { Conta } from "../model/Conta";
import { ContaRepository } from "../repository/ContaRepository";
import { colors } from "../util/Colors";

export class ContaController implements ContaRepository {

    private listaContas: Array<Conta> = new Array<Conta>();
    numero: number = 0;


    procurarPorNumero(numero: number): void {
        let buscaConta = this.buscarNoArray(numero);

        if (buscaConta != null) {
            buscaConta.visualizar();
        } else {
            console.log(colors.fg.red, '\nA Conta numero: ' + numero + ' não foi encontrada!',
                colors.reset);
        }
    }

    listarTodas(): void {
        for (let conta of this.listaContas) {
            conta.visualizar();
        }
    }

    cadastrar(conta: Conta): void {
        this.listaContas.push(conta);
        console.log(colors.fg.green, '\nA Conta número: ' + conta.numero +
            ' foi criada com sucesso!', colors.reset);
    }

    atualizar(conta: Conta): void {
        let buscaConta = this.buscarNoArray(conta.numero);

        if (buscaConta != null) {
            this.listaContas[this.listaContas.indexOf(buscaConta)] = conta;
            console.log(colors.fg.green, '\nA Conta numero: ' + conta.numero +
                ' foi atualizada com sucesso!', colors.reset);
        } else {
            console.log(colors.fg.red, '\nA Conta numero: ' + conta.numero +
                ' não foi encontrada!', colors.reset);
        }
    }

    deletar(numero: number): void {
        let buscaConta = this.buscarNoArray(numero);

        if (buscaConta != null) {
            this.listaContas.splice(this.listaContas.indexOf(buscaConta), 1);
            console.log(colors.fg.green, '\nA Conta numero: ' + numero +
                ' foi apagada com sucesso!', colors.reset);
        } else {
            console.log(colors.fg.red, '\nA Conta numero: ' + numero +
                ' nao foi encontrada!', colors.reset);
        }
    }

    sacar(numero: number, valor: number): void {
        let conta = this.buscarNoArray(numero);
        //tratamento para numeros negativos
        if (valor <= 0) {
            console.log(colors.fg.red, '\nValor de Saque Invalido!', colors.reset);
            return;
        }

        if (conta != null) {

            if (conta.sacar(valor) == true) {

                console.log(colors.fg.green, '\nO Saque na Conta numero: ' + numero +
                    ' foi efetuado com sucesso!', colors.reset);
            }
        } else {
            console.log(colors.fg.red, '\nA Conta numero: ' + numero +
                ' nao foi encontrada!', colors.reset);
        }
    }

    depositar(numero: number, valor: number): void {
        let conta = this.buscarNoArray(numero);

        //tratamento para numeros negativos
        if (valor <= 0) {
            console.log(colors.fg.red, '\nValor de Deposito Invalido!', colors.reset);
            return;
        }

        if (conta != null) {
            conta.depositar(valor);
            console.log(colors.fg.green, '\nO Deposito na Conta numero: ' + numero +
                ' foi efetuado com sucesso!', colors.reset);
        } else {
            console.log(colors.fg.red, '\nA Conta numero: ' + numero +
                ' não foi encontrada!', colors.reset)
        }
    }

    transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
        let contaOrigem = this.buscarNoArray(numeroOrigem);
        let contaDestino = this.buscarNoArray(numeroDestino);
        
        //tratamento para numeros negativos
        if (valor <= 0) {
            console.log(colors.fg.red, '\nValor de Transferencia Invalido!', colors.reset);
            return;
        }

        if (contaOrigem != null && contaDestino != null) {
            if (contaOrigem.sacar(valor) == true) {
                contaDestino.depositar(valor);
                console.log(colors.fg.green, '\nA Transferencia da Conta numero: ' + numeroOrigem +
                    ' para a Conta numero: ' + numeroDestino + ' foi efetuada com sucesso!',
                    colors.reset);
            }
        } else {
            console.log(colors.fg.red, '\nA Transferencia da Conta numero: ' + numeroOrigem +
                ' e/ou a Conta numero: ' + numeroDestino + ' não foram encontradas!', colors.reset);
        }
    }



    //Métodos Auxiliares

    //gerar numeros da conta
    public gerarNumero(): number {
        return ++this.numero;
    }

    //checa se uma conta existe
    public buscarNoArray(numero: number): Conta | null {

        for (let conta of this.listaContas) {
            if (conta.numero === numero) {
                return conta;
            }
        }
        return null;
    }
}