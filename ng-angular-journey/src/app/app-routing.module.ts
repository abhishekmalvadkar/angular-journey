import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HowToShowAndReadDataFromDropDownListComponent } from './how-to-show-and-read-data-from-drop-down-list/how-to-show-and-read-data-from-drop-down-list.component';
import { HowToTakeFileAsInputComponent } from './how-to-take-file-as-input/how-to-take-file-as-input.component';


const routes: Routes = [
  {
    path : 'how-to-show-and-read-data-from-drop-down-list',
    component : HowToShowAndReadDataFromDropDownListComponent
  },
  {
    path : 'how-to-take-file-as-an-input',
    component : HowToTakeFileAsInputComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
