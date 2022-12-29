import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { 
    
  }

  getDetails() {
    return this.http.get('https://api.steradian.ai:4800/r/serialMonitor');
  }


}

