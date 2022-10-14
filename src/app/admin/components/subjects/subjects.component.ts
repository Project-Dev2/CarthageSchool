import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {

  subjects:any[] = []
  users:any = {}
  user:any = null
  constructor(private service:AdminService, private toaster:ToastrService) { }

  ngOnInit(): void {
    this.service.user.subscribe((res:any) => {
      if(res.role) {
        this.user = res
      }
    })
    this.getUserDate();
    this.getSubjects()
    this.getUserInfo()
  }

  getSubjects() {
    this.service.getAllSubjects().subscribe((res:any) => {
      this.subjects = res
    })
  }

  

  delete(index:number) {
    let id = this.subjects[index].id
    this.subjects.splice(index, 1)
    this.service.deleteSubject(id).subscribe(res => {
      this.toaster.success("Succés")
    })
  }

  getUserInfo() {
    this.service.getRole().subscribe(res => {
      this.users = res
    })
  }

  getUserDate() {
    this.service.getRole().subscribe(res => {
      this.service.user.next(res)
    }) 
  }

}
