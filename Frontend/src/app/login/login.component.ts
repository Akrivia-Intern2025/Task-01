import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http'; // Import HttpClient

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient  // Inject HttpClient
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const loginData = this.loginForm.value;
      
      // Send the login data to the backend
      this.http.post('http://localhost:3000/login', loginData).subscribe({
        next: (response) => {
          console.log('Login successful:', response);
          alert('Login successful!');
          this.router.navigateByUrl('/dashboard'); 
        },
        error: (err) => {
          console.error('Login failed:', err);
          alert('Invalid login credentials. Please try again.');
        }
      });
    } else {
      console.log('Form is not valid');
    }
  }

  openRegistrationPage() {
    this.router.navigateByUrl("/signup");
  }
}
