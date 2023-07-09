import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http : HttpClient){
  }

  fetchAllTopics(){
    return this.http.get("/assets/data/topics.json");
  }


}
