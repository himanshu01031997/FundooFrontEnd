import { Component ,EventEmitter,Input,OnInit, Output} from '@angular/core';
import { NoteService } from 'src/app/Services/Note/note.service';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
  // colourarray:any;
  @Input() notesObjects:any
  @Output() refreshevent=new EventEmitter<string>();
  @Output() displayEvent=new EventEmitter<string>();
  constructor(private notes:NoteService){}
ngOnInit(): void {
  
}
ondelete(){
  let reqdata={
    noteId:this.notesObjects.noteId,
  }
  console.log(reqdata);
  this.notes.trashnote(reqdata).subscribe((response:any)=>{
    console.log("note trashed successfully",response);
    this.refreshevent.emit(response);
  })
}
Archievedo(){
  let reqdata={
    noteId:this.notesObjects.noteId,
  }
  console.log(reqdata);
  this.notes.Archieve(reqdata).subscribe((responce:any)=>{
    console.log("note added to  archieve",responce);
    this.displayEvent.emit(responce)
  })
}
colourarray:Array<any> =[
  {code:'#FF6347',name:'Tomato'},
  {code:'#ffffff',name:'white'},
  {code:'#FF4500',name:'OrangeRed'},
  {code:'#FFFF00',name:'Yellow'},
  {code:'#ADFF2F',name:'GreenYellow'},
  {code:'#7FFFD4',name:'Aquamarine'},
  {code:'#FFE4C4',name:'Bisque'},
  {code:'#D3D3D3',name:'Grey'},
]

selectcolor(color:any){
  let reqdata={
    color:color.name,
    noteId:this.notesObjects.noteId,
  }
  console.log(reqdata);
  this.notes.colournote(reqdata).subscribe((responce:any)=>{
    console.log("colour added",responce);
    this.refreshevent.emit(responce);
})
}}
