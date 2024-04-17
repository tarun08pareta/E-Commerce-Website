import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',

  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent  {
  loginObj: any = {
    userName: '',
    password: '',
  };
 
  constructor(private router: Router) {}

  onLogin() {
    if ( this.loginObj.userName == 'tarun@123' && this.loginObj.password == '8875055810' ) {
      this.router.navigateByUrl('/products');

    } 
    
    else {
      alert('Do not enter worng userName and Password ');
    }
  }
  fillCredentials(username: string, password: string) {
    this.loginObj.userName = username;
    this.loginObj.password = password;
    
    
}


}
