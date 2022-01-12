import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../classes/project';
import { User } from '../classes/user';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(private http: HttpClient) { }
  // baseUrl:string ="http://localhost:8080/"

  // downloadResume(id:number):Observable<any>{
  //   var HTTPOptions = {
  //     headers: new HttpHeaders({'Accept': 'application/pdf; charset=UTF-8',}),
  //     observe: "response" as 'body',// to display the full response & as 'body' for type cast
  //     'responseType': 'blob' as 'json'
  // }
 
  //   return this.http.get(this.baseUrl+"user/download/"+id,{ responseType: 'blob' })
  // }

  // getUserById(id:number):Observable<User>{
  //   return this.http.get(this.baseUrl+"user/"+id)
  // }

  // getAllProjects(){
  //   return this.http.get(this.baseUrl+"projects")
  // }

  getAllProjectsDirectlyFromGithub(){
    return this.http.get("https://api.github.com/users/chinmayachinu/repos")
  }
}
