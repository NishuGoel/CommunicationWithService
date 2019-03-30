import { Component, OnInit, Input } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent {

count: number;
constructor(private appservice: AppService){}


  ngOnInit(){
    this.appservice.count.subscribe(c => {
      this.count =c;
    });
  }

  changeValue(){
    this.appservice.changeValue();
  }

}

