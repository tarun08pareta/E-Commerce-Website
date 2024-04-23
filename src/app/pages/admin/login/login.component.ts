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
  // username: string = '';
  // email: string = '';
  // password: string = '';
  // confirmPassword: string = '';
  Admins: {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
  }[] = [];

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
  get username() {
    return this.signUpForm.get('username');
  }

  get email() {
    return this.signUpForm.get('email');
  }

  get password() {
    return this.signUpForm.get('password');
  }

  get confirmPassword() {
    return this.signUpForm.get('confirmPassword');
  }

  get signInUsername()
  {
     return this.signInForm.get('username')
  }
  get signInPassword()
  {
     return this.signInForm.get('password')
  }


  constructor(private router: Router) {}

  ngOnInit(): void {
    this.store();
  }
  


  
  signIn() {
    const username = this.signInUsername?.value;
    const password = this.signInPassword?.value;

    const Admins = this.Admins.find(
      (admin) => admin.username === username && admin.password === password
    );

    if (Admins) {
      this.router.navigateByUrl('/products');
    } else {
      alert('Invalid username or password');
    }
    this.saveLocalStorage();
  }
  

  signUp() {
    if (this.signUpForm.valid) {
      const userNameValue = this.signUpForm.get('username')?.value;
      const emailValue = this.signUpForm.get('email')?.value;
      const passwordValue = this.signUpForm.get('password')?.value;
      const confirmPasswordValue =
        this.signUpForm.get('confirmPassword')?.value;
     
        if (passwordValue !== confirmPasswordValue) {
          alert('Passwords do not match');
          return; 
        }

      if (
        userNameValue &&
        emailValue &&
        passwordValue &&
        confirmPasswordValue
      ) {
        const admin: {
          username: string;
          email: string;
          password: string;
          confirmPassword: string;
        } = {
          username: userNameValue,
          email: emailValue,
          password: passwordValue,
          confirmPassword: confirmPasswordValue,
        };

        this.Admins.push(admin);
        this.saveLocalStorage();
        this.signUpForm.reset(); // Optionally reset the form after saving to local storage
        this.switchPage();
      }
    }
  }
  store() {
    if (typeof window !== 'undefined') {
      const storedAdmins = localStorage.getItem('Admins');
      if (storedAdmins) {
        this.Admins = JSON.parse(storedAdmins);
      }
      this.switchPage();
      console.log(storedAdmins);
    }
  }
  saveLocalStorage() {
    localStorage.setItem('Admins', JSON.stringify(this.Admins));
  }
}
