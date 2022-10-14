import { Component, OnInit } from '@angular/core';
import { SpaceService } from '../../services/space.service';

@Component({
  selector: 'app-space',
  templateUrl: './space.component.html',
  styleUrls: ['./space.component.css']
})
export class SpaceComponent implements OnInit {

  user:any = null
  constructor(private service:SpaceService) { }

  ngOnInit(): void {
    this.service.user.subscribe((res:any) => {
      if(res.role) {
        this.user = res
      }
    })
    this.getUserDate();
  }

  getUserDate() {
    this.service.getRole().subscribe(res => {
      this.service.user.next(res)
    }) 
  }

}
