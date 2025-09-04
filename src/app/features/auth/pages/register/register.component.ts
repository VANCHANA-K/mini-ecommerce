import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../../core/auth/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  imports: [CommonModule, ReactiveFormsModule, RouterLink]
})
export class RegisterComponent {
  private fb = inject(FormBuilder);
  private auth = inject(AuthService);
  private router = inject(Router);

  error: string | null = null;
  success = false;
  loading = false;

  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    username: ['', [Validators.required, Validators.minLength(3)]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    firstname: ['', [Validators.required]],
    lastname: ['', [Validators.required]],
    city: ['Bangkok', [Validators.required]],
    street: ['Silom Road', [Validators.required]],
    number: [123, [Validators.required, Validators.min(1)]],
    zipcode: ['10500', [Validators.required]],
    phone: ['', [Validators.required]]
  });

  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.loading = true;
    this.error = null;

    const formValue = this.form.getRawValue();
    const registerData = {
      email: formValue.email!,
      username: formValue.username!,
      password: formValue.password!,
      name: {
        firstname: formValue.firstname!,
        lastname: formValue.lastname!
      },
      address: {
        city: formValue.city!,
        street: formValue.street!,
        number: formValue.number!,
        zipcode: formValue.zipcode!,
        geolocation: {
          lat: '-37.3159',
          long: '81.1496'
        }
      },
      phone: formValue.phone!
    };

    this.auth.register(registerData).subscribe({
      next: () => {
        this.loading = false;
        this.success = true;
        setTimeout(() => {
          this.router.navigateByUrl('/login');
        }, 2000);
      },
      error: (err) => {
        this.loading = false;
        this.error = 'การสมัครสมาชิกล้มเหลว กรุณาลองใหม่อีกครั้ง';
        console.error('Registration error:', err);
      }
    });
  }

  get email() { return this.form.get('email'); }
  get username() { return this.form.get('username'); }
  get password() { return this.form.get('password'); }
  get firstname() { return this.form.get('firstname'); }
  get lastname() { return this.form.get('lastname'); }
  get phone() { return this.form.get('phone'); }
}