import { Login } from '../model/login';

export class ManagerLogin{
    public static login : Login = new Login();
    public static logins=[
        {
        "id":10,
        "login":"faria",
        "senha":"123"
    },
    {
        "id":11,
        "login":"lu",
        "senha":"123"
    },
    {
        "id":12,
        "login":"bruno",
        "senha":"123"
    }
    ] as Login[];

    public static adicionar(login: Login){
        ManagerLogin.logins.push(login);
    }

    public static Logar(login: Login){
        return ManagerLogin.login = ManagerLogin.logins.find(x=>login.login=== login.login && x.senha=== login.senha);
    }
}