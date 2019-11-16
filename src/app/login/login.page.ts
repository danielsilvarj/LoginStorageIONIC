import { Login } from './../model/login';
import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ManagerLogin } from '../service/managerlogin';

@Component({
  selector: 'app-Login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  login: Login;
  logins: Login[]=[];
  toast: any;
  //toast: any;

  constructor(public navCtrl: NavController, private router : Router, public toastController: ToastController) { 
    this.login = new Login();
  }

  ngOnInit() {
    this.listar();
  }

  showToast(texto : string){
    this.toast = this.toastController.create({
      message: texto,
      duration:8000,
      showCloseButton:true,
      position:"bottom",
      closeButtonText:"X",
      color:"dark",
      animated:true
  }).then((toastData) =>{
    toastData.present();
  });
  }

  public listar(){
    this.logins = ManagerLogin.logins;
  }

  public armazenarStorage(login : Login){
    localStorage.setItem('logado', JSON.stringify(login));
  }

  public logon(){
    let resposta = ManagerLogin.Logar(this.login) as Login;
    console.log(JSON.stringify(resposta));
    if(resposta){
      this.armazenarStorage(resposta);
      this.router.navigateByUrl('logado');
    }
  }


}
