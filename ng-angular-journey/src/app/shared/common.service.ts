import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http : HttpClient){
  }

  fetchAllTopics(){
    return this.http.get("/assets/data/topics.json");
  }

  uploadResume(file : any){
    const formData = new FormData();
    formData.append("file" , file);

    return this.http.post("http://localhost:8080/api/V1/resume/upload" , formData);
  }


}
