import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm!:FormGroup;
  student:any[]= []
  constructor(private fb:FormBuilder, 
              private service:AuthService,
              private toaster:ToastrService) { }

  ngOnInit(): void {
    this.createForm()
    this.getStudent()
  }

  createForm() {
    this.signupForm = this.fb.group({
      usernameStudent:['' , [Validators.required]],
      usernameParent:['' , [Validators.required]],
      adress:['' , [Validators.required]],
      birthday:['' , [Validators.required]],
      class:['' , [Validators.required]],
      phone:['' , [Validators.required]],
      email:['' , [Validators.required , Validators.email]],
    })
  }

  getStudent() {
    this.service.getUsers('signup').subscribe((res:any) => {
      this.student = res
    })
  }

  submit(){
    const model = {
      usernameStudent:this.signupForm.value.usernameStudent,
      usernameParent:this.signupForm.value.usernameParent,
      adress:this.signupForm.value.adress,
      birthday:this.signupForm.value.birthday,
      class:this.signupForm.value.class,
      phone:this.signupForm.value.phone,
      email:this.signupForm.value.email
    }

    let index = this.student.findIndex(item => item.email == this.signupForm.value.email)
    if(index !== -1){
      this.toaster.error("Email déja existe" , "" , {
        disableTimeOut: false,
        titleClass: "toastr_title",
        messageClass: "toastr_message",
        timeOut:5000,
        closeButton: true,
      })
    }else{
      this.service.createStudent(model).subscribe(res => {
        this.toaster.success("Merci pour votre intérêt! On vous contactera le plutôt possible" , "" , {
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
