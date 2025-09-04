import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TokenStore } from './token-store';
import { map, tap } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';

export interface Credentials {
  username: string;
  password: string;
}

export interface RegisterData {
  email: string;
  username: string;
  password: string;
  name: {
    firstname: string;
    lastname: string;
  };
  address: {
    city: string;
    street: string;
    number: number;
    zipcode: string;
    geolocation: {
      lat: string;
      long: string;
    };
  };
  phone: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private apiUrl = 'https://fakestoreapi.com';
  private userSubject = new BehaviorSubject<string | null>(null);
  
  isLoggedIn$: Observable<boolean>;
  user$ = this.userSubject.asObservable();

  constructor(private http: HttpClient, private tokenStore: TokenStore) {
    this.isLoggedIn$ = this.tokenStore.value$.pipe(map(Boolean));
    
    // Initialize user from token if exists
    if (this.tokenStore.isAuthenticated()) {
      const username = sessionStorage.getItem('username');
      this.userSubject.next(username);
    }
  }

  login(creds: Credentials): Observable<void> {
    return this.http.post<{ token: string }>(`${this.apiUrl}/auth/login`, creds).pipe(
      tap(res => {
        this.tokenStore.set(res.token);
        this.userSubject.next(creds.username);
        sessionStorage.setItem('username', creds.username);
      }),
      map(() => {})
    );
  }

  register(userData: RegisterData): Observable<void> {
    return this.http.post<{ id: number }>(`${this.apiUrl}/users`, userData).pipe(
      map(() => {})
    );
  }

  logout() {
    this.tokenStore.clear();
    this.userSubject.next(null);
    sessionStorage.removeItem('username');
  }
  
  get token() { 
    return this.tokenStore.get(); 
  }
  
  get username() { 
    return this.userSubject.value; 
  }

  get isAuthenticated() {
    return this.tokenStore.isAuthenticated();
  }
}