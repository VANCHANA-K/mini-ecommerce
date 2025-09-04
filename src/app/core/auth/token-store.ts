import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

const TOKEN_KEY = 'access_token';

@Injectable({ providedIn: 'root' })
export class TokenStore {
  private token$ = new BehaviorSubject<string | null>(null);
  readonly value$ = this.token$.asObservable();

  constructor() {
    const stored = sessionStorage.getItem(TOKEN_KEY);
    if (stored) this.token$.next(stored);
  }

  set(token: string | null) {
    this.token$.next(token);
    if (token) sessionStorage.setItem(TOKEN_KEY, token);
    else sessionStorage.removeItem(TOKEN_KEY);
  }

  get(): string | null {
    return this.token$.value;
  }

  clear() {
    this.set(null);
  }

  isAuthenticated(): boolean {
    return !!this.token$.value;
  }
}