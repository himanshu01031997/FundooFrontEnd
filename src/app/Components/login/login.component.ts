import { Component,OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/User/user.service';
import { FormBuilder,FormControl,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  implements OnInit{

constructor(private formbuilder:FormBuilder,private userservice:UserService , private route:Router ){}
ngOnInit(): void {
}
// <login components.ts file>
loginform=new FormGroup({
  email:new FormControl("",[Validators.required,Validators.email]),
  password:new FormControl("",Validators.required)
});
loginSubmit(){
  console.log(this.loginform)
  let data={
    email:this.loginform.value.email,
    password:this.loginform.value.password
  }
  this.userservice.Login(data).subscribe((res:any)=>{
    console.log(res.message);
    localStorage.setItem('token',res.token);
    this.route.navigateByUrl("dashboard/getnote") 
  })
}
}
