export class Aluno{
    public nome:string;
    public email:string;
    public senha:string;

    private getNome():string{
        return this.nome;
    }
    private setNome(nome:string){
        this.nome = nome;
    }

    private getEmail():string{
        return this.email;
    }
    private setEmail(email:string){
        this.email = email;
    }

    private getSenha():string{
        return this.senha;
    }
    private setSenha(senha:string) {
        this.senha = senha;
    }




}