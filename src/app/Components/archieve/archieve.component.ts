import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/Services/Note/note.service';

@Component({
  selector: 'app-archieve',
  templateUrl: './archieve.component.html',
  styleUrls: ['./archieve.component.scss']
})
export class ArchieveComponent implements OnInit {
  archievelist:any
  constructor(private notes:NoteService){}
  ngOnInit(): void {
    this.createnoteSubmit();
  }
  createnoteSubmit(){
    this.notes.getnote().subscribe((response:any)=>{
      this.archievelist=response.data
      this.archievelist=this.archievelist.filter((object:any)=>{
        return object.archive ==true && object.trash ==false;
      })
      console.log(this.archievelist);
    })
  }
  displayMessage($event:any){
    this.createnoteSubmit();
  }
}
