import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/lib/services/auth/auth.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { setLogin } from 'src/app/lib/store/counter.actions';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  form!: FormGroup;
  constructor(
    private auth: AuthService,
    private route: Router,
    private store: Store<{isLogin: number}>,
    // public fb: FormBuilder
  ) { 
    // this.form = this.fb.group({
    //   email: [''],
    //   password: [null],
    // });
  }

  ngOnInit(): void {
  }
  email: string = '';
  password: string = ''

  signIn() {
    const token = localStorage.getItem('token') || "";
    const userData = {
      email: this.email,
      password: this.password,
      token,
    }
    this.auth.logIn(userData)
    .subscribe(res => {
      const response: any = res
      localStorage.setItem("token", response?.token);
      this.store.dispatch(new setLogin((response?.token).length));
      this.route.navigate(['/']);
    }, err => {
      console.log({err})
    })
  }

  // submitForm() {
  //   var formData: any = new FormData();
  //   formData.append('name', this.form?.get('email')?.value);
  //   formData.append('email', this.form?.get('password')?.value);
  //   console.log({
  //     name: this.form?.get('email')?.value,
  //     password: this.form?.get('password')?.value
  //   }, formData);
  //   // this.http
  //   //   .post('http://localhost:4000/api/create-user', formData)
  //   //   .subscribe({
  //   //     next: (response) => console.log(response),
  //   //     error: (error) => console.log(error),
  //   //   });
  // }
}
