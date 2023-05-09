import { Component, OnInit } from '@angular/core';
import { ContactFormService } from 'src/app/contact-form.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  name: any;
  email: any;
  message: any;
  constructor(private contactFormService: ContactFormService) { }

  ngOnInit(): void {
    
  }
  onSubmit() {
    this.contactFormService.sendEmail(this.name, this.email, this.message)
      .subscribe(() => {
        console.log('Email sent successfully');
      }, () => {
        console.log('Email failed to send');
      });
  }
  

}
