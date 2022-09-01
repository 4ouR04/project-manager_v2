import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProjectsService } from 'src/app/services/projects.service';
import { UserService } from 'src/app/services/user.service';

interface IProject{
  ProjectName: string
  Description: string
  Due_date: string
}

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css'],
})
export class NewProjectComponent implements OnInit {
  newProjectForm!: FormGroup;
  clients: any;

  constructor(
    private service: ProjectsService,
    private userservice: UserService
  ) {}

  ngOnInit(): void {
    this.newProjectForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      date: new FormControl(null, [Validators.required]),
    });
    this.userservice.getUsersWP().subscribe((response) => {
      this.clients = response;
    });
  }
  onSubmit() {
    let project: IProject = {
      ProjectName: this.newProjectForm.value.name,
      Description: this.newProjectForm.value.description,
      Due_date: this.newProjectForm.value.date,
    };
    this.service.newProject(project).subscribe((response) => {});

    this.newProjectForm.reset();
  }
}
