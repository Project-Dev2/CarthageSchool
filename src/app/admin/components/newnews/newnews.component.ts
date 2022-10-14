import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-newnews',
  templateUrl: './newnews.component.html',
  styleUrls: ['./newnews.component.css']
})
export class NewnewsComponent implements OnInit {

  name = new FormControl("");
  newsForm!:FormGroup;
  avis:any[] = [];
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
    this.newsForm = this.fb.group({
      news:['' , [Validators.required]]
    })
  }

  createNews() {
      const model = {
        news: this.newsForm.value.news      
      }
      this.avis.push(model)      
    console.log(this.avis)
  }

  start() {
    if(this.name.value == "") {
      this.toaster.error("Veuillez choisir l'objet de l'avis'")
    }else {
      this.startAdd = true
      this.subjectName = this.name.value
    }

    if(this.startAdd) {
      this.stepperIndex = 1
    }
  }

  clearForm() {
    this.newsForm.reset()
  }

  cancel() {
    this.newsForm.reset()
    this.avis = [];
    this.subjectName = "";
    this.name.reset();
    this.stepperIndex = 0;
    this.startAdd = false
    window.location.reload();
    
  }

  submit() {
    const model = {
      name:this.subjectName,
      avis:this.avis
    }
    if(this.preview) {
      this.stepperIndex = 2
    }else {
      this.service.createNews(model).subscribe((res:any) => {
        this.preview = true;
        this.id = res.id
      })
    }
  }

  delete(index:number) {
    this.avis.splice(index, 1)
    const model = {
      name:this.subjectName,
      avis:this.avis
    }
    this.service.updateNews(model, this.id).subscribe(res => {
      this.toaster.success("Succés")
    })
  }
}
