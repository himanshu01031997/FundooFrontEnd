import { Component ,OnInit} from '@angular/core';
import { UserService } from 'src/app/Services/User/user.service';
import { FormBuilder,FormControl,FormGroup,Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  Submitted=false;
  public showpassword:boolean=false;
  constructor(private formbuilder:FormBuilder,private userservice:UserService,private snack:MatSnackBar){}

  ngOnInit(): void {}
    Registerform=new FormGroup({
      firstName:new FormControl("",Validators.required),
      lastName:new FormControl("",Validators.required),
      emailId:new FormControl("",Validators.required),
      password:new FormControl("",[Validators.required,Validators.minLength(6)]),

  })
  public togglepasswordvisibility():void{
  this.showpassword =!this.showpassword;
  }
  RegisterinSumbit(){
    this.Submitted=true;
    console.log(this.Registerform)
    let data={
      firstName:this.Registerform.value.firstName,
      lastName:this.Registerform.value.lastName,
      emailId:this.Registerform.value.emailId,
      password:this.Registerform.value.password,
    }
    
    this.userservice.Register(data).subscribe((res:any)=>{
      console.log(res.message);
    })
  }      
}
