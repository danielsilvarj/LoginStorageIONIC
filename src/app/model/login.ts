export class Login{
    
    id : number;
    login : string;
    senha :string;

    constructor(id?:number, login?:string, senha?:string){
        this.id=id;
        this.login=login;
        this.senha=senha;
    }
}