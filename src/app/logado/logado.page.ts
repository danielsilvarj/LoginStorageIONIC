import { Login } from './../model/login';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logado',
  templateUrl: './logado.page.html',
  styleUrls: ['./logado.page.scss'],
})
export class LogadoPage implements OnInit {

  logado : Login;

  constructor(private router : Router) { 
    this.logado = new Login();
  }

  ngOnInit() {
    this.buscarStorage();
  }

  public buscarStorage(){
    this.logado = JSON.parse(localStorage.getItem('logado'));
  }

  public logout(){
    localStorage.removeItem('logado');
    this.router.navigateByUrl('home');
  }

}
