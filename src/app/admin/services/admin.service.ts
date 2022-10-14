import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  user = new Subject()
  constructor(private http:HttpClient) { }

  createSubject(model:any) {
    return this.http.post(environment.baseApi + 'subjects'  ,model)
  }

  createNews(model:any) {
    return this.http.post(environment.baseApi + 'news'  ,model)
  }

  getSubject(id:number) {
    return this.http.get(environment.baseApi + 'subjects/'+id)
  }

  getNews(id:number) {
    return this.http.get(environment.baseApi + 'news/'+id)
  }

  updateSubject(model:any , id:number) {
    return this.http.put(environment.baseApi + 'subjects/'+id  ,model)
  }

  updateNews(model:any , id:number) {
    return this.http.put(environment.baseApi + 'news/'+id  ,model)
  }

  getAllSubjects() {
    return this.http.get(environment.baseApi + 'subjects')
  }

  getAllNews() {
    return this.http.get(environment.baseApi + 'news')
  }

  deleteSubject(id:number) {
    return this.http.delete(environment.baseApi + 'subjects/'+id )
  }

  deleteNews(id:number) {
    return this.http.delete(environment.baseApi + 'news/'+id )
  }

  getRole() {
    return this.http.get(environment.baseApi+'login/1')
  }

  getStudent(id:number) {
    return this.http.get(environment.baseApi+"students/"+id)
  }
  updateStudent(id:number , model:any) {
    return this.http.put(environment.baseApi+"students/"+id , model)
  }
  getAllStudents() {
    return this.http.get(environment.baseApi + 'students')
  }

  deleteAccount(id:number) {
    return this.http.delete(environment.baseApi + 'students/'+id )
  }

  getUsers(type:string){
    return this.http.get(environment.baseApi+type)
  }
  
}
