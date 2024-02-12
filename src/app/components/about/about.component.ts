import { Component, OnInit } from '@angular/core';
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faAngular } from '@fortawesome/free-brands-svg-icons';
import { faJava } from '@fortawesome/free-brands-svg-icons';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faCss3 } from '@fortawesome/free-brands-svg-icons';
import { faDocker } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { animate, group, query, style, transition, trigger } from '@angular/animations';
import { Router } from '@angular/router';

interface EventItem {
  status?: string;
  date?: string;
  icon?: string;
  color?: string;
  image?: string;
}

declare var anime: any;

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [
    trigger('wordUpdated', [
      transition("* => *", group([
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(40%)' }),
          animate('.5s ease-out', style({ opacity: 1, transform: 'translateY(0%)' }))
        ], { optional: true }),
        query(':leave', [
          style({ opacity: 1, transform: 'translateY(0%)' }),
          animate('.5s ease-out', style({ opacity: 0, transform: 'translateY(-40%)' }))
        ], { optional: true })
      ]))

    ]),
  ]
})
export class AboutComponent implements OnInit {
  visible: boolean = false;
  faFacebook = faFacebook;
  faInstagram = faInstagram;
  faGithub = faGithub;
  faLinkedin = faLinkedin;
  faAngular = faAngular;
  faJava = faJava;
  faHtml5 = faHtml5;
  faCss3 = faCss3;
  faDatabase = faDatabase;
  faDocker = faDocker;

  currentYear = (new Date()).getFullYear();

  events: EventItem[];

  index = 0;
  words = ['DEVELOPER', 'ENGINEER', 'DESIGNER', 'devops'];
  word = 'DEVELOPER';

  showDialog() {
    this.visible = true;
  }

  panelTitle = "panel title";
  panelContent = "panel content"


  constructor(private router: Router) {
    setInterval(_ => this.changeWord(), 2000);
    this.events = [
      { status: 'Elementary School', date: '2005', icon: 'pi pi-shopping-cart', color: '#FF9800' },
      { status: 'Medical High School', date: '2014', icon: 'pi pi-shopping-cart', color: '#9C27B0', image: 'game-controller.jpg' },
      { status: 'Facultaty of electrical engineur', date: '2018', icon: 'pi pi-cog', color: '#673AB7' }
    ];
  }

  changeWord() {
    if (this.index === 0) {
      this.index = 1;
    } else if (this.index === 1) {
      this.index = 2;
    } else {
      this.index = 0;
    }

    this.word = this.words[this.index];
  }

  ngOnInit(): void {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    var textWrapper = document.querySelector('.ml2');
    textWrapper!.innerHTML = textWrapper!.textContent!.replace(/\S/g, "<span class='letter'>$&</span>");

    anime.timeline()
      .add({
        targets: '.ml2 .letter',
        scale: [4, 1],
        opacity: [0, 1],
        translateZ: 0,
        easing: "easeOutExpo",
        duration: 950,
        delay: (el: number, i: number) => 70 * i
      }).add({
        targets: '.ml2',
        opacity: 1,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
      });

  }



}
