import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  faFacebookF,
  faGithubAlt,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';
import { User } from 'src/app/classes/user';
import { PortfolioService } from 'src/app/service/portfolio.service';
import { saveAs } from 'file-saver';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  highlightName?: string;
  highlightFirstDesc?: string;
  highlightSecondDesc?: string;
  userName?: string;
  description?: string;
  id: number = 1;
  user?: User;

  constructor(
    private router: Router,
    private portfolioService: PortfolioService
  ) {}

  ngOnInit(): void {
    // this.getUser(this.id)
  }

  faFacebook = faFacebookF;
  faLinkedIn = faLinkedinIn;
  faGithub = faGithubAlt;

  // getUser(id: number) {
  //   this.portfolioService.getUserById(id)
  //     .subscribe(
  //       data => {
  //         // console.log(data)
  //         this.user = data
  //         this.userName = this.user?.userName
  //         this.description = this.user?.description
  //         // console.log(this.userName + " " + this.description)
  //         this.highlightName=this.userName?.substring(0,8);
  //         this.highlightFirstDesc=this.description?.substring(11,24);
  //         this.highlightSecondDesc=this.description?.substring(27)
  //         // console.log(this.highlightName+ " "+ this.highlightFirstDesc+" "+this.highlightSecondDesc)
  //       }, error => {
  //         console.log(error)
  //       }
  //     )
  // }

  download() {
    let link = document.createElement('a');
    link.download = 'resume';
    link.href = 'assets/resume/RESUME.pdf';
    link.click();
  }
  // downloadResume(id: number) {
  //   this.portfolioService.downloadResume(id).subscribe(data => {
  //     const blob = new Blob([data], { type: "application/pdf" });
  //     saveAs(blob, "resume.pdf");
  // console.log("data is "+ data)
  // var headers = data.headers;
  // console.log(headers); //<--- Check log for content disposition
  // console.log(data.headers.get('content-disposition'));
  // const parts: string[] = data.headers.get('content-disposition').split(';');
  // console.log("parts is "+parts)
  // const filename = parts[1].split('=')[1];
  // console.log("filename is "+filename)
  // console.log(data.body)

  // const blob = new Blob([data._body], { type: 'text/plain' });
  // console.log(blob)
  // var url= window.URL.createObjectURL(blob);
  // window.open(url);

  //   }, error => {
  //     console.log(error)
  //   })
  // }
}
