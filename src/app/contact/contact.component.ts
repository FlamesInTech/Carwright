import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
 linkedin = 'assets/icons/linkedin.png';
 facebook = 'assets/icons/facebook.png';
 instagram = 'assets/icons/instagram.png';
 twitter = 'assets/icons/twitter.png';
 phone = 'assets/icons/phone.png';
  constructor() { }

  ngOnInit(): void {
  }

}
