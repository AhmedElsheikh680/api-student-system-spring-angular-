import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RegisterComponent } from './components/register/register.component';
import { StudentsComponent } from './components/students/students.component';
import { ActionComponent } from './components/action/action.component';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {RouteActivatedService} from './services/route-activated.service';
import {ReactiveFormsModule} from '@angular/forms';
import { ContentComponent } from './components/content/content.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'content', component:ContentComponent},
  { path: 'control', component: ActionComponent, canActivate: [RouteActivatedService] },
  { path: 'students', component: StudentsComponent, canActivate: [RouteActivatedService] },
  { path: '', component: StudentsComponent, canActivate: [RouteActivatedService] },
  { path: '**', component: StudentsComponent, canActivate: [RouteActivatedService] }
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RegisterComponent,
    StudentsComponent,
    ActionComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
