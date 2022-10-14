import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/admin/services/admin.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  id:any;
  news:any;
  user:any;
  usernews:any[] = [];
  studentInfo:any
  constructor(private route:ActivatedRoute, private service:AdminService, private toaster:ToastrService) {
    this.id = this.route.snapshot.paramMap.get('id')
    this.getNews()
    this.getLogedInUser()
    
  }

  ngOnInit(): void {
  }

  getNews() {
    this.service.getNews(this.id).subscribe(res => {
      this.news = res
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
      this.usernews = res?.avis ? res?.avis : [];
    })
  }

  delete(index:number) {
    this.news.questions.splice(index, 1)
    const model = {
      name:this.news.name,
      questions:this.news.questions
    }
    this.service.updateNews(model, this.id).subscribe(res => {
      this.toaster.success("Succés")
    })
  }

}
