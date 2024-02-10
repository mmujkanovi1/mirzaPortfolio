import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/model/Project';
import { ProjectService } from 'src/app/services/projects.service';
import { faAngular } from '@fortawesome/free-brands-svg-icons';
import { faJava } from '@fortawesome/free-brands-svg-icons';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faCss3 } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  faAngular = faAngular;
  faJava = faJava;
  faHtml5 = faHtml5;
  faCss3 = faCss3;
  faDatabase = faDatabase;

  layout: string = 'list';

  projects!: Project[];

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.projectService.getProjects().then((data) => (this.projects = data.slice(0, 12)));
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
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
