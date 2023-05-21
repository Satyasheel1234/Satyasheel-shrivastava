import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
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
  showThankYouMessage: boolean = false;

  constructor(private http: HttpClient,private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    
  }
  showMessage() {
    this.showThankYouMessage = true;
  
    setTimeout(() => {
      this.showThankYouMessage = false;
      this.renderer.setStyle(this.elementRef.nativeElement.querySelector('.thank-you-message'), 'display', 'none');
    }, 5000); // 5000 milliseconds = 5 seconds
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
    this.showMessage();
  }
 
}
