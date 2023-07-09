import { Component } from '@angular/core';
import { CommonService } from '../shared/common.service';

@Component({
  selector: 'app-how-to-take-file-as-input',
  templateUrl: './how-to-take-file-as-input.component.html',
  styleUrls: ['./how-to-take-file-as-input.component.css']
})
export class HowToTakeFileAsInputComponent {

  constructor(private commonService : CommonService){}

  onFileSelect(event : any){
    let selectedFile = event['target']['files'][0];
    console.log(selectedFile);
    this.commonService.uploadResume(selectedFile)
        .subscribe((response:any)=> {
          console.log(`Is file uploaded :: ${response}`);
        })
  }


}
