import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { SpaceService } from 'src/app/space/services/space.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user:any = null
  public url: any;
  constructor(private service:SpaceService, private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.url = event.url;
      }
    })
  }

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

  logout() {
    const model = {}
    this.service.login(model).subscribe(res => {
      this.user = null
      this.service.user.next(res)
    })
  }

  toHome() {
    document.getElementById("home").scrollIntoView();
  }
  toSchool() {
    document.getElementById("school").scrollIntoView();
  }
  toServices() {
    document.getElementById("services").scrollIntoView();
  }
  toGallery() {
    document.getElementById("gallery").scrollIntoView();
  }
  toProgram() {
    document.getElementById("program").scrollIntoView();
  }
  toActivity() {
    document.getElementById("activity").scrollIntoView();
  }
  toContact() {
    document.getElementById("contact").scrollIntoView();
  }

}
