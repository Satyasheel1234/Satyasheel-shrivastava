import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import Swiper from 'swiper';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  name: any;
  email: any;
  message: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    
  }
  
  submitForm(): void {
    const data = {
      name: this.name,
      email: this.email,
      message: this.message
    };

    this.http.post('http://localhost:3000/contact', data).subscribe(
      response => {
        console.log(response);
        // Reset the form
        this.name = '';
        this.email = '';
        this.message = '';
      },
      error => {
        console.log(error);
      }
    );
  }
  

}
