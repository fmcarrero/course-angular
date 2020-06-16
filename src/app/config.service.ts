import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) {}

  public makeCall(): Observable<object> {
    return this.http.get('https://reqres.in/api/users?page=1');
  }
}
