import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';


interface IProject {
  ProjectName: string;
  Description: string;
  Due_date: string;
}

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  constructor(private httpClient: HttpClient) { }
  
  getProjects(token: string) {
    return this.httpClient.get('http://localhost:3002/projects/', {
      headers: new HttpHeaders({ token }),
    });
  }
  newProject(project: IProject,token: string) {
    return this.httpClient.post('http://localhost:3002/projects/', project, {
      headers: new HttpHeaders({ token }),
    });
  }
  deleteProject(id: string, token: string) {
    return this.httpClient.delete('http://localhost:3002/projects/' + id, {
      headers: new HttpHeaders({ token }),
    });
  }
}
