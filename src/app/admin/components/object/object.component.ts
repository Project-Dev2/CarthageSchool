import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-object',
  templateUrl: './object.component.html',
  styleUrls: ['./object.component.css']
})
export class ObjectComponent implements OnInit {

  news:any[] = []
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
    this.getNews()
    this.getUserInfo()
  }

  getNews() {
    this.service.getAllNews().subscribe((res:any) => {
      this.news = res
    })
  }

  

  delete(index:number) {
    let id = this.news[index].id
    this.news.splice(index, 1)
    this.service.deleteNews(id).subscribe(res => {
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
