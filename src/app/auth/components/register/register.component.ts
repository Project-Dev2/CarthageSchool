import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userForm!:FormGroup;
  students:any[]= []
  constructor(private fb:FormBuilder, 
              private service:AuthService,
              private toaster:ToastrService) { }

  ngOnInit(): void {
    this.createForm()
    this.getStudents()
  }

  createForm() {
    this.userForm = this.fb.group({
      nameStudent:['' , [Validators.required]],
      username:['' , [Validators.required]],
      email:['' , [Validators.required , Validators.email]],
      password:['' , [Validators.required]],
      confirmPassword:['' , [Validators.required]],
    })
  }

  getStudents() {
    this.service.getUsers('students').subscribe((res:any) => {
      this.students = res
    })
  }

  submit(){
    const model = {
      username:this.userForm.value.username,
      email:this.userForm.value.email,
      password:this.userForm.value.password
    }

    let index = this.students.findIndex(item => item.email == this.userForm.value.email)
    if(index !== -1){
      this.toaster.error("Email déja existe" , "" , {
        disableTimeOut: false,
        titleClass: "toastr_title",
        messageClass: "toastr_message",
        timeOut:5000,
        closeButton: true,
      })
    }else{
      this.service.createUser(model).subscribe(res => {
        this.toaster.success("Succès" , "" , {
          disableTimeOut: false,
          titleClass: "toastr_title",
          messageClass: "toastr_message",
          timeOut:5000,
          closeButton: true,
        })
      })
    }
  }
}
