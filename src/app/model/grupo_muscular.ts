import { exercicio } from './exercicio';

export class grupo_muscular{
    public nome: string;
    public getNome(): string {
        return this.nome;
    }
    public setNome(value: string) {
        this.nome = value;
    }
    public lista_exercicios: exercicio[];
    public getLista_exercicios(): exercicio[] {
        return this.lista_exercicios;
    }
    public setLista_exercicios(value: exercicio[]) {
        this.lista_exercicios = value;
    }

}