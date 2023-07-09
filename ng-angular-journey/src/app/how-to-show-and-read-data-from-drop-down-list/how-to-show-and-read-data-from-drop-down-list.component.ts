import { Component } from '@angular/core';

@Component({
  selector: 'app-how-to-show-and-read-data-from-drop-down-list',
  templateUrl: './how-to-show-and-read-data-from-drop-down-list.component.html',
  styleUrls: ['./how-to-show-and-read-data-from-drop-down-list.component.css']
})
export class HowToShowAndReadDataFromDropDownListComponent {

  primarySkills = [
    {
      id:1,
      name: 'Java'
    },
    {
      id:2,
      name: '.NET'
    },
    {
      id:3,
      name: 'Python'
    }
  ];

  selectedSkillId = "";


}
