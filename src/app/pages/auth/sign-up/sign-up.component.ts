import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/lib/services/auth/auth.service';
import { Router } from '@angular/router'; 
import { Store } from '@ngrx/store';
import { setLogin } from 'src/app/lib/store/counter.actions';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(
    private auth: AuthService,
    private route: Router,
    private store: Store<{isLogin: number}>
  ) { }

  signUpFrom = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(4)]),
    fname: new FormControl('', [Validators.required]),
    lname: new FormControl('', [Validators.required]),
  })

  ngOnInit(): void {
  }

  // email: string = ''; 
  // password: string = '';
  // firstName: string = '';
  // lastName: string = '';

  get email() {
    return this.signUpFrom.get('email')
  }

  get password() {
    return this.signUpFrom.get('password')
  }

  get fname() {
    return this.signUpFrom.get('fname')
  }

  get lname() {
    return this.signUpFrom.get('lname')
  }

  get isValidForm() {
    console.log('form ==> ', this.signUpFrom.valid);
    return this.signUpFrom.valid
  }

  signIn() {
    const token = localStorage.getItem('token') || "";
    const userData = {
      email: this.email?.value,
      password: this.password?.value,
      token,
    }
    this.auth.logIn(userData)
    .subscribe(res => {
      this.route.navigate(['/']);
      const response: any = res
      localStorage.setItem("token", response?.token);
      this.store.dispatch(new setLogin((response?.token).length));
    }, err => {
      console.log({err})
    })
  }
  
  handleSignUp(event: any) {
    console.log(this.email?.value);
    console.warn(this.signUpFrom.valid)

    // event.preventDefault();
    // const userDate = {
    //   email: this.email,
    //   password: this.password,
    //   fname: this.firstName,
    //   lname: this.lastName,
    // }
    // this.auth.signUP(userDate).subscribe(res => {
    //   this.signIn();
    // })
  }

}
