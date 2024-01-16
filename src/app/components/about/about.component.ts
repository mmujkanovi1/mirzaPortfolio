import { Component, OnInit } from '@angular/core';
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

declare var anime: any;

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  visible: boolean = false;
  faFacebook = faFacebook;
  faInstagram = faInstagram;
  faGithub = faGithub;
  faLinkedin = faLinkedin;

  showDialog() {
    this.visible = true;
  }

  panelTitle = "panel title";
  panelContent = "panel content"


  constructor() { }

  ngOnInit(): void {

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
