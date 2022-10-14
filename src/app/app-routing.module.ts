import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from './admin/components/account/account.component';
import { NewnewsComponent } from './admin/components/newnews/newnews.component';
import { NewstudentsComponent } from './admin/components/newstudents/newstudents.component';
import { NewtestComponent } from './admin/components/newtest/newtest.component';
import { ObjectComponent } from './admin/components/object/object.component';
import { StudentsComponent } from './admin/components/students/students.component';
import { SubjectsComponent } from './admin/components/subjects/subjects.component';
import { LoginComponent } from './auth/components/login/login.component';
import { RegisterComponent } from './auth/components/register/register.component';
import { SignupComponent } from './auth/components/signup/signup.component';
import { AuthGuard } from './auth/services/auth.guard';
import { HomeComponent } from './home/components/home/home.component';
import { SpaceComponent } from './space/components/space/space.component';
import { NewsComponent } from './student/components/news/news.component';
import { TestComponent } from './student/components/test/test.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'register', component:RegisterComponent},
  {path:'login', component:LoginComponent},
  {path:'space', component:SpaceComponent},
  {path:'newtest', component:NewtestComponent},
  {path:'newnews', component:NewnewsComponent},
  {path:'subjects', component:SubjectsComponent},
  {path:'news', component:ObjectComponent},
  {path:'test/:id', component:TestComponent},
  {path:'object/:id', component:NewsComponent},
  {path:'students', component:StudentsComponent},
  {path:'signup', component:SignupComponent},
  {path:'newstudents', component:NewstudentsComponent},
  {path:'access', component:AccountComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
