import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder,FormControl,FormGroup,Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NoteService } from 'src/app/Services/Note/note.service';

@Component({
  selector: 'app-note-create',
  templateUrl: './note-create.component.html',
  styleUrls: ['./note-create.component.scss']
})
export class NoteCreateComponent implements OnInit {

@Output() refresheventCreate=new EventEmitter<string>();
constructor(private formbuilder:FormBuilder,private noteservices:NoteService,private activeroute:ActivatedRoute){}
createnoteform !:FormGroup;
display:boolean=true;
token:any;
submitted=false;
ngOnInit(): void {
  this.createnoteform=this.formbuilder.group({
    Title:['',Validators.required],
    Body:['',Validators.required],

  })
  this.token=this.activeroute.snapshot.paramMap.get('token');//used in console for parameter show
  console.log(this.token);
}
clicktitle(){
  this.display=false;
}
createnoteSubmit(){
  this.submitted=true;
  if(this.createnoteform.valid){
    let mydata={
      Title:this.createnoteform.value.Title,
      Body:this.createnoteform.value.Body
    }
    console.log(mydata);
    this.noteservices.addmynote(mydata).subscribe((responce:any)=>
    {
      console.log(responce);
      this.refresheventCreate.emit(responce)
    });
  }
}
};

