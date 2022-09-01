import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


interface IProject {
  ProjectName: string;
  Description: string;
  Due_date: string;
}

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  private url = 'http://localhost:3002/';
  constructor(private httpClient: HttpClient) { }
  
  getProjects() {
    return this.httpClient.get('http://localhost:3002/projects/');
  }
  newProject(project: IProject) {
    return this.httpClient.post('http://localhost:3002/projects/',project)
  }
  deleteProject(id: string) {
    return this.httpClient.delete('http://localhost:3002/projects/' + id);
  }
}
