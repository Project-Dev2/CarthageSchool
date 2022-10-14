import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule} from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { RegisterComponent } from './auth/components/register/register.component';
import { LoginComponent } from './auth/components/login/login.component';
import { SpaceComponent } from './space/components/space/space.component';
import { TopbarComponent } from './home/components/topbar/topbar.component';
import { NavbarComponent } from './home/components/navbar/navbar.component';
import { HomeComponent } from './home/components/home/home.component';
import { LandingComponent } from './home/components/landing/landing.component';
import { SchoolComponent } from './home/components/school/school.component';
import { OurservicesComponent } from './home/components/ourservices/ourservices.component';
import { GalleryComponent } from './home/components/gallery/gallery.component';
import { ProgramComponent } from './home/components/program/program.component';
import { StatsComponent } from './home/components/stats/stats.component';
import { ActivityComponent } from './home/components/activity/activity.component';
import { ContactComponent } from './home/components/contact/contact.component';
import { FooterComponent } from './home/components/footer/footer.component';
import { NewtestComponent } from './admin/components/newtest/newtest.component';
import { SubjectsComponent } from './admin/components/subjects/subjects.component';
import { TestComponent } from './student/components/test/test.component';
import { NewnewsComponent } from './admin/components/newnews/newnews.component';
import { ObjectComponent } from './admin/components/object/object.component';
import { NewsComponent } from './student/components/news/news.component';
import { StudentsComponent } from './admin/components/students/students.component';
import { SignupComponent } from './auth/components/signup/signup.component';
import { NewstudentsComponent } from './admin/components/newstudents/newstudents.component';
import { AccountComponent } from './admin/components/account/account.component';
import { AuthGuard } from './auth/services/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    SpaceComponent,
    TopbarComponent,
    NavbarComponent,
    HomeComponent,
    LandingComponent,
    SchoolComponent,
    OurservicesComponent,
    GalleryComponent,
    ProgramComponent,
    StatsComponent,
    ActivityComponent,
    ContactComponent,
    FooterComponent,
    NewtestComponent,
    SubjectsComponent,
    TestComponent,
    NewnewsComponent,
    ObjectComponent,
    NewsComponent,
    StudentsComponent,
    SignupComponent,
    NewstudentsComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    CommonModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule, 
    FormsModule,
    MatRadioModule,
    MatStepperModule,
    MatButtonModule,
    MatTableModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
