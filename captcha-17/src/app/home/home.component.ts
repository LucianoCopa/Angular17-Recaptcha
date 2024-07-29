import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  email: string;
  captcha: string;
constructor(){
  this.captcha = '';
  this.email = 'Secret@gmail.com';
}

ngOnInit(): void{

}
resolved(captchaResponse: string){
  this.captcha = captchaResponse;
  console.log('XXXXXX' + this.captcha);

}

alertaRegistro(){
  alert("Registrado");
}
}
