import { Conta } from "./Conta";

export class ContaCorrente extends Conta {

    private _limite: number;

    constructor(numero: number, agencia: number, tipo: number, titular: string, saldo: number,
        limite: number) {
        super(numero, agencia, tipo, titular, saldo);
        this._limite = limite;
    }

    public getLimite(): number {
        return this._limite;
    }

    public setLimite(valor: number) {
        this._limite = valor;
    }

    public sacar(valor: number): boolean {

        if ((this.saldo + this._limite) < valor) {
            console.log(`\n Saldo Insuficiente!`);
            return false;
        }

        this.saldo = this.saldo - valor;
        return true;
    }

    public visualizar(): void {
        super.visualizar();
        console.log(`Limite: ${this._limite.toFixed(2)}`);
    }






}

