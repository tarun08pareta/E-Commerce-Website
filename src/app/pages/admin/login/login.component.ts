import { Component } from '@angular/core';


@Component({
  selector: 'app-login',
 
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
 loginObj:any ={
   userName:"",
   password: ""
 }

}
