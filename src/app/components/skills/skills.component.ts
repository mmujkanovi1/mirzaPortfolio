import { LocationStrategy } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

}
