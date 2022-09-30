import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  p1 = 'assets/images/pic3b.png';
  constructor() { }

  ngOnInit(): void {
  }

}
