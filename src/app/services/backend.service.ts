import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor() { }

  async registerNewUser(registerData: FormData) {
    return await fetch(environment.apiUrl + 'register/', { method: 'POST', body: registerData});
  }

  async login(loginData: FormData) {
    return await fetch(environment.apiUrl + 'login/', { method: 'POST', body: loginData});
  }

}
