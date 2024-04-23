import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',

  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  isswitchPage: boolean = true;
  username: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  Admins: {username: string,email: string,password: string,confirmPassword: string }[] = [];

  switchPage() {
    this.isswitchPage = !this.isswitchPage;
  }

  signInForm = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[a-zA-Z0-9@]+$/),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(15),
    ]),
  });

  signUpForm = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[a-zA-Z0-9@]+$/),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(20),
    ]),
    confirmPassword: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(15),
    ]),
  });
  get signInFormControl() {
    return this.signInForm.controls;
  }

  get signUpFormControl() {
    return this.signUpForm.controls;
  }

  constructor(private router: Router) {

  }

  ngOnInit(): void {
   
    // this.store()
  }
  signIn() {
    const Admins = this.Admins.find(
      (admin) =>
        admin.username == this.username && admin.password == this.password
    );
    if (Admins) {
      // Navigate to the products page
      this.router.navigateByUrl('/products');
    } else {
      // Handle authentication failure (e.g., display error message)
      alert('Invalid username or password');
    }
    this.saveLocalStorage();
  }

  signUp() {
    if (this.password !== this.confirmPassword) {
      // Handle password mismatch (e.g., display error message)
      alert('Passwords do not match');
      return;
    }

    this.Admins.push({
      username: this.username,
      password: this.password,
      confirmPassword: this.confirmPassword,
      email: this.email,
    });

    this.saveLocalStorage();
this.store()
    this.switchPage();
    // console.log(this.Admins)

  }
store()
{
  if (typeof window !== 'undefined') {
    const storedAdmins = localStorage.getItem('Admins');
    if (storedAdmins) {
      this.Admins = JSON.parse(storedAdmins);
    }
    this.switchPage();
    console.log(storedAdmins)
  }
}
  saveLocalStorage() {
    localStorage.setItem('Admins', JSON.stringify(this.Admins));
  }
}
