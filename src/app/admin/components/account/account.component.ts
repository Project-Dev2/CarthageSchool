import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  dataSource:any
  datatable:any
  displayedColumns:any
  account:any[] = [];
  constructor(private service:AdminService, private toaster:ToastrService) {
    this.displayedColumns = ['position', 'registerNumber', 'mail', 'button'];
   }

  ngOnInit(): void {
    this.getStudent()
    this.getStudents()
  }

  getStudent() {
    this.service.getUsers('students').subscribe((res:any) => {
      this.dataSource = res?.map((student:any) => {
        return [{
          registerNumber:student.username,
          mail:student.email
        }]
      })
      this.datatable = [];

      this.dataSource.forEach((item:any) => {
        item.forEach((subItem:any) => {
          this.datatable.push({
            registerNumber:subItem.registerNumber,
            mail:subItem.mail
          })
        })
      })
      //console.log(this.datatable)
    })
  }

  getStudents() {
    this.service.getAllStudents().subscribe((res:any) => {
      this.account = res
    })
  }

  delete(index:number) {
    let id =  this.account[index].id
    this.account.splice(index, 1)
    this.service.deleteAccount(id).subscribe(res => {
      this.toaster.success("Succés")
    })
    window.location.reload();
  }

  

}
