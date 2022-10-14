import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SpaceService {

  user = new Subject()
  constructor(private http:HttpClient) {}

  getRole() {
    return this.http.get(environment.baseApi+'login/1')
  }

  login(model:any) {
    return this.http.put(environment.baseApi+'login/1' , model)
  }
}
