import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HowToShowAndReadDataFromDropDownListComponent } from './how-to-show-and-read-data-from-drop-down-list/how-to-show-and-read-data-from-drop-down-list.component';


const routes: Routes = [
  {
    path : 'how-to-show-and-read-data-from-drop-down-list',
    component : HowToShowAndReadDataFromDropDownListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
