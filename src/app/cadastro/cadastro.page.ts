import { Component, OnInit } from '@angular/core';
import { Login } from '../model/login';
import { NavController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ManagerLogin } from '../service/managerlogin';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})

export class CadastroPage implements OnInit {

  login: Login;
  logins: Login[]=[];
  toast: any;

  constructor(public navCtrl: NavController, private router : Router, public toastController: ToastController) { 
    this.login = new Login();
  }

  ngOnInit() {
    this.listar();
  }

  public cadastrar(){

    ManagerLogin.adicionar(this.login);
    this.showToast('Gravado com Sucesso');
    this.login = new Login();
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

}
