import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  projects: any;
  token = localStorage.getItem("token") as string
  constructor(private service: ProjectsService) {}

  ngOnInit(): void {
    this.service.getProjects(this.token).subscribe((response) => {
      this.projects = response;
    });
  }
  onDelete(id: string) {
    // let id!: string;
    this.service.deleteProject(id,this.token).subscribe((response) => {});
  }
}
