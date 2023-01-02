import { Injectable } from '@angular/core';
import {HttpClient} from'@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }
  PostService(url:string,payload:any,tokan:boolean=false,httpOptions:any={}){
    return this.http.post(url,payload,tokan && httpOptions)
  }
  PutService(url:string,payload:any,tokan:boolean=true,httpOptions:any={}){
    return this.http.put(url,payload,tokan && httpOptions)
  }
  GetService(url:any,tokan:boolean=true,httpOptions:any){
    return this.http.get(url,tokan && httpOptions)
  }
  DeleteService(url:any,tokan:boolean=true,httpOptions:any){
    return this.http.delete(url,tokan && httpOptions)
  }
 
}
