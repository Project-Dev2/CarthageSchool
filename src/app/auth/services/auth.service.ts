import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user = new Subject()
  constructor(private http:HttpClient) { }

  createUser(model:any) {
    return this.http.post(environment.baseApi+'students' , model)
  }

  createStudent(model:any) {
    return this.http.post(environment.baseApi+'signup' , model)
  }

  getUsers(type:string){
    return this.http.get(environment.baseApi+type)
  }

  login(model:any) {
    return this.http.put(environment.baseApi+'login/1' , model)
  }

  getAllStudents() {
    return this.http.get(environment.baseApi + 'signup')
  }

  deleteStudents(id:number) {
    return this.http.delete(environment.baseApi + 'signup/'+id )
  }
}
