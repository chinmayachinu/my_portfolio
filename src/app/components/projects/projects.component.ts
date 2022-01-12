import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/classes/project';
import { PortfolioService } from 'src/app/service/portfolio.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  // projects?:Project[]

  projectsDirectlyObtainedFromGithub?:any[]

  constructor(private service:PortfolioService) { }

  ngOnInit(): void {
    // this.service.getAllProjects().subscribe(
    //   (response:any)=>{
    //     // console.log(typeof response)
    //     // console.log(response)
    //     this.projects=response.body
    //     // console.log(this.projects)

    //   },
    //   (error)=>{
    //     alert("something went wrong in project component")
    //   }
    // )

    this.service.getAllProjectsDirectlyFromGithub().subscribe(
      (response:any)=>{
        this.projectsDirectlyObtainedFromGithub=response;
        // console.log(this.projectsDirectlyObtainedFromGithub)
      },
      (error:any)=>{
        console.log(error)
      }
    )
  }

}
