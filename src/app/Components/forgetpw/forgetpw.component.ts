import { Component,OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/User/user.service';
import { FormBuilder,FormControl,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-forgetpw',
  templateUrl: './forgetpw.component.html',
  styleUrls: ['./forgetpw.component.scss']
})
export class ForgetpwComponent implements OnInit{
  constructor(private formbuilder:FormBuilder,private userservice:UserService){}
  ngOnInit(): void {
  }
  Forgetpwform=new FormGroup({
    email:new FormControl("",[Validators.required,Validators.email]),
  });
  ForgetpwSubmit(){
    console.log(this.Forgetpwform)
    let data={
      email:this.Forgetpwform.value.email,
    }
    this.userservice.forgetpww(data).subscribe((res:any)=>{
      console.log(res.message);
    })
  }
}
