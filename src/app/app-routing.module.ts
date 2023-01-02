import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthguardGuard } from './AuthGuard/authguard.guard';
import { ArchieveComponent } from './Components/archieve/archieve.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { DisplayNoteComponent } from './Components/display-note/display-note.component';
// import { ForgetComponent } from './Components/forget/forget.component';
import { ForgetpwComponent } from './Components/forgetpw/forgetpw.component';
import { GetNotesComponent } from './Components/get-notes/get-notes.component';
import { LoginComponent } from './Components/login/login.component';
import { NoteCreateComponent } from './Components/note-create/note-create.component';
import { RegisterComponent } from './Components/register/register.component';
import { ResetComponent } from './Components/reset/reset.component';
import { TrashComponent } from './Components/trash/trash.component';


const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  // {path:'forget',component:ForgetComponent},
  {path:'reset/:token',component:ResetComponent},
  {path:'forgetpass',component:ForgetpwComponent},
  {path:'dashboard',component:DashboardComponent,canActivate:[AuthguardGuard],
  children:[
  {path:'',redirectTo:"/dashboard/getnote",pathMatch:'full'},
  {path:'getnote',component:GetNotesComponent},
  {path:'trash',component:TrashComponent},
  {path:'archieve',component:ArchieveComponent}

  ]},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }