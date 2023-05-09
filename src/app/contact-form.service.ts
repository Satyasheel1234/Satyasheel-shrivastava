import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactFormService {
   SCRIPT_PATH = './script.php';
  constructor(private http: HttpClient) { }
  sendEmail(name: string, email: string, message: string) {
    const url =this.SCRIPT_PATH ;
    const data = { name, email, message };
    return this.http.post(url, data);
  }
  
}
