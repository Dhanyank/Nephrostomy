import { Component } from '@angular/core';
import { ServiceService } from './Service/service.service';
// import { ServiceService } from './Service/service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newdata:any;
  constructor(private as:ServiceService){

  }
  ngOnInit(){
    this.as.getdata().subscribe(res=>{
      this.newdata=res;
      console.log(this.newdata);
      
    })
  }
}

