import { Component, OnInit } from '@angular/core';


interface MenuItem {
  text: string;
  link: string;
}


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isMenuOpen = false;
  isOpen = false;

  sidebarVisible = false;

  menuItems: MenuItem[];

  constructor() {
    this.menuItems = [
      { text: 'About', link: '/about' },
      { text: 'Education', link: '/education' },
      { text: 'Experience', link: '/experience' },
      { text: 'Projects', link: '/projects' },
      { text: 'Skills', link: '/skills' },
      { text: 'Contact', link: '/contact' },
    ];
  }

  ngOnInit(): void {
  }


  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }


  closeMenu() {
    this.isMenuOpen = false;
  }

}
