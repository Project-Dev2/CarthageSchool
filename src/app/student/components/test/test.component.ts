import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/admin/services/admin.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  id:any;
  subject:any;
  total:number = 0;
  showResult:boolean = false;
  user:any;
  usersubjects:any[] = [];
  validExam:boolean = true;
  studentInfo:any
  constructor(private route:ActivatedRoute, private service:AdminService, private toaster:ToastrService) {
    this.id = this.route.snapshot.paramMap.get('id')
    this.getSubject()
    this.getLogedInUser()
    
  }

  ngOnInit(): void {
  }

  getSubject() {
    this.service.getSubject(this.id).subscribe(res => {
      this.subject = res
    })
  }

  getLogedInUser() {
    this.service.getRole().subscribe(res => {
      this.user = res
      this.getUserData()
    })
  }

  getUserData() {
    this.service.getStudent(this.user.userId).subscribe((res:any) => {
      this.studentInfo = res
      this.usersubjects = res?.subjects ? res?.subjects : [];
      this.checkValidExam()
    })
  }

  getAnswer(event:any) {
    let value = event.value,
      questionIndex = event.source.name
      this.subject.questions[questionIndex].studentAnswer = value
    console.log(this.subject.questions)
  }

  delete(index:number) {
    this.subject.questions.splice(index, 1)
    const model = {
      name:this.subject.name,
      questions:this.subject.questions
    }
    this.service.updateSubject(model, this.id).subscribe(res => {
      this.toaster.success("Succés")
    })
  }

  checkValidExam() {
    for(let x in this.usersubjects) {
      if(this.usersubjects[x].id == this.id) {
        this.total = this.usersubjects[x].degree
        this.validExam = false;
        //this.toaster.warning("test is finished")
      }
    }
    console.log(this.validExam)
  }

  getResult() {
    this.total = 0
    for(let x in this.subject.questions) {
      if(this.subject.questions[x].studentAnswer == this.subject.questions[x].correctAnswer) {
        this.total++
      }
    }
    this.showResult = true
    this.usersubjects.push({
      name:this.subject.name,
      id:this.id,
      degree:this.total
    })
    const model = {
      username: this.studentInfo.username,
      email: this.studentInfo.email,
      password: this.studentInfo.password,
      subjects : this.usersubjects
    }
    this.service.updateStudent(this.user.userId , model).subscribe(res => {
      this.toaster.success("Succés")
    })
    console.log(this.total)
  }
}