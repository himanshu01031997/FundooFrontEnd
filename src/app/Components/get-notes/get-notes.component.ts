import { Component,OnInit } from '@angular/core';
import { NoteService } from 'src/app/Services/Note/note.service';

@Component({
  selector: 'app-get-notes',
  templateUrl: './get-notes.component.html',
  styleUrls: ['./get-notes.component.scss']
})
export class GetNotesComponent implements OnInit{
  notesArray:any;
  constructor(private notes:NoteService){

  }
  ngOnInit(): void {
    this.createnoteSubmit()
  }
  createnoteSubmit(){
    this.notes.getnote().subscribe((response:any)=>{
      console.log(response);
      this.notesArray=response.data;
      console.log("stored to array variable")
      console.log(this.notesArray);
      this.notesArray=this.notesArray.filter((object:any)=>{
        return object.trash==false;
      })
      this.notesArray=this.notesArray.filter((object:any)=>{
        return object.archive==false;
      })
      this.notesArray.reverse()
       
    })
    
    
  }
  receivedRefreshEventFromDisplaytogetAll($event:any){
    console.log("display to getallnotes"+$event);
    this.createnoteSubmit();

  }
  receiverefresheventCreate($event:any){
  console.log("createnote to getallnotes"+$event)
  this.createnoteSubmit();
  }

}
