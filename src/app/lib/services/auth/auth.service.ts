import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SIGN_UP_URL, LOG_IN_URL } from '../../constants';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private httpClient: HttpClient) { }
  

  signUP(data: any) {
    return this.httpClient.post(SIGN_UP_URL, data);
  }

  logIn(data: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'x-auth-token': `bearer ${data.token}`
      })
    }
    return this.httpClient.post(LOG_IN_URL, data, httpOptions);
  }

}
