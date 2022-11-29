import { Component } from '@angular/core';
import { ServiceService } from './Service/service.service';
// import { ServiceService } from './Service/service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appointmentDetails:any;
  constructor(private apiService:ServiceService){

  }
  ngOnInit(){
    this.apiService.getAppointmentDetails().subscribe(res=>{
      this.appointmentDetails=res;
      console.log(this.appointmentDetails);
      
    })
  }
}

