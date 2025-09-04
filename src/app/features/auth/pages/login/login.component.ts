import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../../core/auth/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [CommonModule, ReactiveFormsModule, RouterLink]
})
export class LoginComponent {
  private fb = inject(FormBuilder);
  private auth = inject(AuthService);
  private router = inject(Router);

  error: string | null = null;
  loading = false;

  form = this.fb.group({
    username: ['mor_2314', [Validators.required]],
    password: ['83r5^_', [Validators.required, Validators.minLength(3)]]
  });

  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.loading = true;
    this.error = null;

    const formData = this.form.getRawValue();
    if (formData.username && formData.password) {
      this.auth.login({ username: formData.username, password: formData.password }).subscribe({
        next: () => {
          this.loading = false;
          this.router.navigateByUrl('/');
        },
        error: (err) => {
          this.loading = false;
          this.error = 'เข้าสู่ระบบล้มเหลว กรุณาตรวจสอบชื่อผู้ใช้และรหัสผ่าน';
          console.error('Login error:', err);
        }
      });
    }
  }

  get username() { return this.form.get('username'); }
  get password() { return this.form.get('password'); }
}