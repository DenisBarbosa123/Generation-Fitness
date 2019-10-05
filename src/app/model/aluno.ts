export class Aluno{

    public  nome:string;
    public email:string;
    public senha:string;
    public cpf: string;
    public celular: string;
    public data_nascimento: Date;
    public objetivo: string;

    
    constructor(nome?:string, email?:string, senha?:string, cpf?:string, celular?:string, data_nascimento?:Date, objetivo?:string){
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.cpf = cpf;
        this.data_nascimento = data_nascimento;
        this.celular = celular;
        this.objetivo = objetivo;

    }

    //getters and setters
    public getcelular(): string {
        return this.celular;
    }
    public setcelular(value: string) {
        this.celular = value;
    }
    public getcpf(): string {
        return this.cpf;
    }
    public setcpf(value: string) {
        this.cpf = value;
    }
    public getobjetivo(): string {
        return this.objetivo;
    }
    public setobjetivo(value: string) {
        this.objetivo = value;
    }

    public getdatanascimento(): Date {
        return this.data_nascimento;
    }
    public setdata_nascimento(value: Date) {
        this.data_nascimento = value;
    }
    public getNome():string{
        return this.nome;
    }
    public setNome(nome:string){
        this.nome = nome;
    }

    public getEmail():string{
        return this.email;
    }
    public setEmail(email:string){
        this.email = email;
    }

    public getSenha():string{
        return this.senha;
    }
    public setSenha(senha:string) {
        this.senha = senha;
    }




}