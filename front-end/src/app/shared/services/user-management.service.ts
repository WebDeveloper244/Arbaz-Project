import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserManagementService {
url='http://localhost:8686/userManagementRouter/userRegister'
  constructor(private httpClient:HttpClient) { }

  userSingUp(payload:any){
     return this.httpClient.post(this.url,payload)
  }
}
