import { Component,EventEmitter,Input,OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DataService } from 'src/app/Services/data/data.service';
import { UpdateNoteComponent } from '../update-note/update-note.component';

@Component({
  selector: 'app-display-note',
  templateUrl: './display-note.component.html',
  styleUrls: ['./display-note.component.scss']
})
export class DisplayNoteComponent implements OnInit{
  @Output() refresheventformdisplaytogetAll=new EventEmitter<string>();

  constructor(private data:DataService,public dialog:MatDialog){}
  message:any;
  @Input() notelist:any;
  @Output() updateAutoRefresh=new EventEmitter<string>();

ngOnInit(): void {
  this.data.incomingData.subscribe((response)=>{
   console.log(response);
  })
}

editnotedialoguebox(mynotes:any){
  const dialogbox=this.dialog.open(UpdateNoteComponent,{
    width:'40%',
    height:'auto',
    data:mynotes
  })
  dialogbox.afterClosed().subscribe((result:any)=>{
    console.log("hello",result);
    this.updateAutoRefresh.emit(result);
  })
}
receiverefreshevent($event:any){
 console.log("icon to display"+$event);
 this.message=$event;
 this.refresheventformdisplaytogetAll.emit(this.message);
}

}
