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

  async checkAuthToken() {
    const authtoken = localStorage.getItem('authtoken');
    if(authtoken) {
      const resp = await fetch(environment.apiUrl + 'checkauthtoken/', { method: 'POST', headers: {Authorization: 'Token ' + authtoken}});
      return resp.ok
    }
    return false;
  }

}
