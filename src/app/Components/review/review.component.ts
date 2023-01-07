import { Component ,OnInit} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/User/user.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit{
  constructor( private formb:FormBuilder   ,private user:UserService){}
  click=false;
  ngOnInit(): void {
    
  }
  register=new FormGroup({
    firstName:new FormControl("",[Validators.required]),
    lastName:new FormControl("",[Validators.required]),
    emailId:new FormControl("",[Validators.required]),
    password:new FormControl("",[Validators.required,Validators.minLength(8)]),
  }
    
  )
  submit(){
    this.click=true;
    console.log(this.register)
    let data={
      firstName:this.register.value.firstName,
      lastName:this.register.value.lastName,
      emailId:this.register.value.emailId,
      password:this.register.value.password,

    }
    console.log(data);
    this.user.Register(data).subscribe((result:any)=>
    console.log(result.message)
    )
  }

}
