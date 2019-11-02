export class exercicio{
    public nome: string;
    public numero_repeticoes: number;
    public tempo_descanso: number;
    public quantidade_series: number;

    constructor(nome?:string, numero_repeticoes?:number, tempo_descanso?:number, quantidade_series?:number ){
        this.nome = nome;
        this.numero_repeticoes = numero_repeticoes;
        this.quantidade_series = quantidade_series;
        this.tempo_descanso = tempo_descanso;
    }

    public getNome(): string {
        return this.nome;
    }
    public setNome(value: string) {
        this.nome = value;
    }
    public getTempo_descanso(): number {
        return this.tempo_descanso;
    }
    public setTempo_descanso(value: number) {
        this.tempo_descanso = value;
    }
    public getQuantidade_series(): number {
        return this.quantidade_series;
    }
    public setQuantidade_series(value: number) {
        this.quantidade_series = value;
    }
    public getNumero_repeticoes(): number {
        return this.numero_repeticoes;
    }
    public setNumero_repeticoes(value: number) {
        this.numero_repeticoes = value;
    }
   



    
}