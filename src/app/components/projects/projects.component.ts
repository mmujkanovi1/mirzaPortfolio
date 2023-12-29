import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/model/Project';
import { ProjectService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  layout: string = 'list';

  projects!: Project[];

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.projectService.getProjects().then((data) => (this.projects = data.slice(0, 12)));
  }

  getSeverity(project: Project) {
    switch (project.inventoryStatus) {
      case 'INSTOCK':
        return 'success';

      case 'LOWSTOCK':
        return 'warning';

      case 'OUTOFSTOCK':
        return 'danger';

      default:
        return null;
    }
  };
}
