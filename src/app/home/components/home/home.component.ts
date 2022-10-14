import { Component, OnInit } from '@angular/core';

interface Item {
  imageSrc: string;
  imageAlt: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  data: Item[] = [
    {
      imageSrc:'../assets/imgs/gallery-1.jpg',
      imageAlt: '1'
    },
    {
      imageSrc:'../assets/imgs/gallery-2.jpg',
      imageAlt: '2'
    },
    {
      imageSrc:'../assets/imgs/gallery-3.jpg',
      imageAlt: '3'
    },
    {
      imageSrc:'../assets/imgs/gallery-4.jpg',
      imageAlt: '4'
    },
    {
      imageSrc:'../assets/imgs/gallery-5.jpg',
      imageAlt: '5'
    },
    {
      imageSrc:'../assets/imgs/gallery-6.jpg',
      imageAlt: '6'
    },
    {
      imageSrc:'../assets/imgs/gallery-7.jpg',
      imageAlt: '7'
    },
    {
      imageSrc:'../assets/imgs/gallery-8.jpg',
      imageAlt: '8'
    },
    {
      imageSrc:'../assets/imgs/gallery-9.jpg',
      imageAlt: '9'
    }
  ];
}
