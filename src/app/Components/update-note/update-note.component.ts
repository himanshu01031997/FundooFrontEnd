import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NoteService } from 'src/app/Services/Note/note.service';

@Component({
  selector: 'app-update-note',
  templateUrl: './update-note.component.html',
  styleUrls: ['./update-note.component.scss']
})
export class UpdateNoteComponent implements OnInit{
  title:any;
  body:any;
  id:any;
  color:any;
  
  constructor(@Inject(MAT_DIALOG_DATA) public data:any,
  public dialogbox:MatDialogRef<UpdateNoteComponent>,
  private  mynotes:NoteService){
  this.title=data.title,//swagger///console
  this.body=data.body,
  this.id=data.noteId,
  this.color=data.color
  }
  ngOnInit(): void {
    
  }
  closeDialogue(){
    let requestdata={
      title:this.title,
      body:this.body,
      color:this.color
    }
    this.mynotes.updatenote(requestdata,this.id).subscribe((response:any)=>{
      console.log(response);
     this.dialogbox.close();
    })
  }
}
