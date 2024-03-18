import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor() { }

  async registerNewUser(formData: FormData) {
    return await fetch(environment.apiUrl + 'register/', { method: 'POST', body: formData});
  }

}
