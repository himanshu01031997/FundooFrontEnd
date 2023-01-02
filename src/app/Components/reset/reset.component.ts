import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/Services/User/user.service';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent implements OnInit{
  Resetpwform! :FormGroup;
  submitted=false;
  public showpassword:boolean=false;

  token:any;
  constructor(private formBuilder:FormBuilder ,private userservice:UserService,private activeroot:ActivatedRoute,private snack:MatSnackBar){}

  ngOnInit(): void {
    this.Resetpwform=this.formBuilder.group({
      password:new FormControl("",[Validators.required,Validators.minLength(7)]),
      confirmPassword:new FormControl("",Validators.required)
          })
          this.token=this.activeroot.snapshot.paramMap.get('token');
          console.log(this.token)
    }
    public togglepasswordvisibility():void{
      this.showpassword =!this.showpassword;
      }
    resetpwSubmit(){
      this.submitted=true;
     if(this.Resetpwform.valid){
      console.log(this.Resetpwform)
      let data={
        password:this.Resetpwform.value.password,
        confirmPassword:this.Resetpwform.value.confirmPassword
      }
      console.log(data);
      this.userservice.Reset(data,this.token).subscribe((responc:any)=>
      {
        console.log(responc);
      })
     }
    }

  }
  
   


