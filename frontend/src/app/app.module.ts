import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RegisterComponent } from './components/register/register.component';
import { StudentsComponent } from './components/students/students.component';
import { ActionComponent } from './components/action/action.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'control', component: ActionComponent },
  { path: 'students', component: StudentsComponent },
  { path: '', component: StudentsComponent },
  { path: '**', component: StudentsComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RegisterComponent,
    StudentsComponent,
    ActionComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
