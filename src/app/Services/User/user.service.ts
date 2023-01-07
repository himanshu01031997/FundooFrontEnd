import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { createApplication } from '@angular/platform-browser';
import { HttpService } from '../Http/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl='https://localhost:44391/api/';
  
  token:any;

  constructor(private httpservice:HttpService) { }
  Login(data:any){
    let header={
      headers:new HttpHeaders({
        'Content-Type':'application/json'
      })
    }
    return this.httpservice.PostService(`https://localhost:44391/User/Login/${data.email}/${data.password}`,data,false,header)
  }
  Register(requestdata:any){
    let header={
      Headers:new HttpHeaders({
        'Content-Type':'application/json'
      })
    }
    return this.httpservice.PostService(`https://localhost:44391/User/Register`,requestdata,false,header)
  }
  forgetpww(forg:any){
    let header={
      headers:new HttpHeaders({
        'Content-Type':'application/json'
      })
    }
    return this.httpservice.PostService(`https://localhost:44391/User/ForgetPassword?email=`+forg.email,{},false,header)
  }
  Reset(reqdata:any,token:any){
    console.log("resettoken",token);
    let header={
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':'Bearer '+token
      })
  }
  return this.httpservice.PutService(`https://localhost:44391/User/ResetPassword?password=`+reqdata.password+'&confirmpassword='+reqdata.confirmPassword,{},true,header)
}

}