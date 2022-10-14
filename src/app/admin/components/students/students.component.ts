import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  dataSource:any
  datatable:any
  displayedColumns:any
  constructor(private service:AdminService) {
    this.displayedColumns = ['position', 'name', 'mail','subjectName', 'degree'];
   }

  ngOnInit(): void {
    this.getStudents()
  }

  getStudents() {
    this.service.getUsers('students').subscribe((res:any) => {
      this.dataSource = res?.map((student:any) => {

        if(student?.subjects) {
          return student?.subjects?.map((sub:any) => {
            return {
              name:student.username,
              mail:student.email,
              subjectName:sub.name,
              degree:sub.degree
            }
          })
        }else {
          return [{
            name:student.username,
            mail:student.email,
            subjectName:"-",
            degree:"-"
          }]
        }
      })
      this.datatable = [];

      this.dataSource.forEach((item:any) => {
        item.forEach((subItem:any) => {
          this.datatable.push({
            name:subItem.name,
            mail:subItem.mail,
            subjectName:subItem.subjectName,
            degree:subItem.degree
          })
        })
      })
      console.log(this.datatable)
    })
    
  }

}
