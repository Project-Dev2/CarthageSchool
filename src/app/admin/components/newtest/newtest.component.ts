import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-newtest',
  templateUrl: './newtest.component.html',
  styleUrls: ['./newtest.component.css']
})
export class NewtestComponent implements OnInit {

  name = new FormControl("");
  questionForm!:FormGroup;
  questions:any[] = [];
  correctNum:any;
  startAdd:boolean = false
  subjectName = "";
  stepperIndex = 0;
  preview:boolean = false
  id:any;
  constructor(private fb:FormBuilder, private toaster:ToastrService, private service:AdminService) { }

  ngOnInit(): void {
    this.createForm()
  }

  createForm() {
    this.questionForm = this.fb.group({
      question:['' , [Validators.required]],
      answer1:['' , [Validators.required]],
      answer2:['' , [Validators.required]],
      answer3:['' , [Validators.required]],
      answer4:['' , [Validators.required]]
    })
  }

  createQuestion() {
    if(this.correctNum) {
      const model = {
        question: this.questionForm.value.question,
        answer1: this.questionForm.value.answer1,
        answer2: this.questionForm.value.answer2,
        answer3: this.questionForm.value.answer3,
        answer4: this.questionForm.value.answer4,
        correctAnswer:this.questionForm.value[this.correctNum]
      }
      this.questions.push(model)
      this.questionForm.reset()
    }else {
      this.toaster.error("Veuillez cocher la bonne réponse")
    }
    console.log(this.questions)
  }

  start() {
    if(this.name.value == "") {
      this.toaster.error("Veuillez choisir le nom de matière")
    }else {
      this.startAdd = true
      this.subjectName = this.name.value
    }

    if(this.startAdd) {
      this.stepperIndex = 1
    }
  }

  getCorrect(event:any) {
    this.correctNum = event.value
  }

  clearForm() {
    this.questionForm.reset()
  }

  cancel() {
    this.questionForm.reset()
    this.questions = [];
    this.subjectName = "";
    this.name.reset();
    this.stepperIndex = 0;
    this.startAdd = false
  }

  submit() {
    const model = {
      name:this.subjectName,
      questions:this.questions
    }
    if(this.preview) {
      this.stepperIndex = 2
    }else {
      this.service.createSubject(model).subscribe((res:any) => {
        this.preview = true;
        this.id = res.id
      })
    }
  }

  delete(index:number) {
    this.questions.splice(index, 1)
    const model = {
      name:this.subjectName,
      questions:this.questions
    }
    this.service.updateSubject(model, this.id).subscribe(res => {
      this.toaster.success("Succés")
    })
  }
}
