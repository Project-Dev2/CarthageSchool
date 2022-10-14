import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-newstudents',
  templateUrl: './newstudents.component.html',
  styleUrls: ['./newstudents.component.css']
})
export class NewstudentsComponent implements OnInit {

  dataSource:any
  datatable:any
  displayedColumns:any
  students:any[] = [];
  constructor(private service:AuthService, private toaster:ToastrService) {
    this.displayedColumns = ['position', 'nameStudent', 'birth', 'location', 'level', 'nameParent', 'tel', 'mail', 'button'];
   }

  ngOnInit(): void {
    this.getStudent()
    this.getStudents()
  }

  getStudent() {
    this.service.getUsers('signup').subscribe((res:any) => {
      this.dataSource = res?.map((student:any) => {
        return [{
          nameStudent:student.usernameStudent,
          birth:student.birthday,
          location:student.adress,
          level:student.class,
          nameParent:student.usernameParent,
          tel:student.phone,
          mail:student.email
        }]
      })
      this.datatable = [];

      this.dataSource.forEach((item:any) => {
        item.forEach((subItem:any) => {
          this.datatable.push({
            nameStudent:subItem.nameStudent,
            birth:subItem.birth,
            location:subItem.location,
            level:subItem.level,
            nameParent:subItem.nameParent,
            tel:subItem.tel,
            mail:subItem.mail
          })
        })
      })
      console.log(this.datatable)
    })
    
  }

  getStudents() {
    this.service.getAllStudents().subscribe((res:any) => {
      this.students = res
    })
  }

  delete(index:number) {
    let id =  this.students[index].id
    this.students.splice(index, 1)
    this.service.deleteStudents(id).subscribe(res => {
      this.toaster.success("Succés")
    })
    window.location.reload();
  }
}
