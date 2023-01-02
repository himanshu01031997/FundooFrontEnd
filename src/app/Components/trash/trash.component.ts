import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/Services/Note/note.service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit{
  trashlist:any
  constructor(private notes:NoteService){}
ngOnInit(): void {
  this.createnoteSubmit()
}
createnoteSubmit(){
this.notes.getnote().subscribe((responce:any)=>{
  console.log(responce)
  this.trashlist=responce.data;
  this.trashlist=this.trashlist.filter((Object:any)=>{
    return Object.trash ==true;
  }
  )
})
}
restore(notes:any){
  let reqdata={
    noteId:notes.noteId
  }
  console.log(reqdata)
  this.notes.trashnote(reqdata).subscribe((responce:any)=>{
    console.log(responce)
  })
}
}
