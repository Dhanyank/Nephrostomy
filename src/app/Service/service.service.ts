import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
// import { getLocaleDateFormat } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  getAppointmentDetails() {
    return this.http.get('https://api.steradian.ai:9999/r/appointmentid?id=637f6f4c8883171aefa27175');
  }

}
