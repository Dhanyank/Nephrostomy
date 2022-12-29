import { Component } from '@angular/core';
import { ServiceService } from './Service/service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  details: any = [];
  newdata:any=[];
  
  constructor(private apiService: ServiceService) {

  }
  ngOnInit() {
    this.apiService.getDetails().subscribe(res=>{
      this.details=res;
      console.log(this.details);
      this.newdata=this.details.data
console.log(this.newdata)
    })
  
}
}
