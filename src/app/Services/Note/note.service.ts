import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../Http/http.service';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  baseUrl='https://localhost:44391/api/';
  token:any;
  
  constructor(private httpservice:HttpService) {this.token=localStorage.getItem('token') }
  addmynote(requestdata:any ){
  let header={
    headers:new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization':'Bearer '+this.token
    })
  }
  return this.httpservice.PostService(this.baseUrl+`Note/Create`,requestdata,true,header);
  }
  getnote(){
    let header={
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':'Bearer '+this.token
      })
  }
  return this.httpservice.GetService(this.baseUrl+`Note/Get`,true,header)
}
updatenote(data:any,noteId:any){
  let header={
    headers:new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization':'Bearer '+this.token
    })
}
return this.httpservice.PutService(this.baseUrl+`Note/Update?noteid=`+noteId,data,true,header)
}
trashnote(reqdata:any){
  console.log(reqdata)
  let header={
    headers:new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization':'Bearer '+this.token
    })
  }
  return this.httpservice.PutService(this.baseUrl+`Note/TrashInput?noteid=`+reqdata.noteId,{},true,header);

}
Archieve(reqdata:any){
  console.log(reqdata)
  let header={
    headers:new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization':'Bearer '+this.token
    })
  }
  return this.httpservice.PutService(this.baseUrl+`Note/ArchieveMessage?noteid=`+reqdata.noteId,{},true,header);

}
colournote(data:any){
  console.log(data)
  let header={
    headers:new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization':'Bearer '+this.token
    })
  }
  return this.httpservice.PutService(this.baseUrl+`Note/colorchange?noteid=`+data.noteId+`&color=`+data.color,{},true,header)
}}