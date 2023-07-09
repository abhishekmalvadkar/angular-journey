import { Component, OnInit } from '@angular/core';
import { CommonService } from './shared/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  topics = [];

constructor(private commonService : CommonService){

}
  ngOnInit(): void {
    this.commonService.fetchAllTopics()
          .subscribe((response:any) => {
            this.topics = response;
          });
  }
}
