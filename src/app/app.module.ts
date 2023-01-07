import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
// import { ForgetComponent } from './Components/forget/forget.component';
import { ResetComponent } from './Components/reset/reset.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { ForgetpwComponent } from './Components/forgetpw/forgetpw.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { NoteCreateComponent } from './Components/note-create/note-create.component';
import { IconComponent } from './Components/icon/icon.component';
import { GetNotesComponent } from './Components/get-notes/get-notes.component';
import { AuthguardService } from './Services/authguard/authguard.service';
import { DisplayNoteComponent } from './Components/display-note/display-note.component';
import { UpdateNoteComponent } from './Components/update-note/update-note.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatMenuModule} from '@angular/material/menu';
import { TrashComponent } from './Components/trash/trash.component';
import { ArchieveComponent } from './Components/archieve/archieve.component';
import { ReviewComponent } from './Components/review/review.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    // ForgetComponent,
    ResetComponent,
    ForgetpwComponent,
    DashboardComponent,
    NoteCreateComponent,
    IconComponent,
    GetNotesComponent,
    DisplayNoteComponent,
    UpdateNoteComponent,
    TrashComponent,
    ArchieveComponent,
    ReviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    HttpClientModule,
    FormsModule, ReactiveFormsModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatDialogModule,
    MatMenuModule
  ],
  providers: [
    AuthguardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
