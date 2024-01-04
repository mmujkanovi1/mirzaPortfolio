import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

interface MenuItems {
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
  gfg: MenuItem[] = [ 
    { 
        label: 'HTML', 
    }, 
    { 
        label: 'AngularJS', 
    }, 
    { 
        label: 'ReactJS', 
    }, 
    { 
        label: 'PrimeNG', 
    }, 
];

  sidebarVisible = false;

  menuItems!: MenuItems[];

  constructor(private router: Router) {

  }

    ngOnInit() {
      this.menuItems = [
        { text: 'About', link: 'about' },
        { text: 'Education', link: 'education' },
        { text: 'Experience', link: 'experience' },
        { text: 'Projects', link: 'projects' },
        { text: 'Skills', link: 'skills' },
        { text: 'Contact', link: 'contact' },
      ];
      this.gfg = [ 
        { 
            label: 'HTML', 
        }, 
        { 
            label: 'AngularJS', 
        }, 
        { 
            label: 'ReactJS', 
        }, 
        { 
            label: 'PrimeNG', 
        }, 
    ]; 
    }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }


  closeMenu() {
    this.isMenuOpen = false;
  }

  changePage() {
    this.router.navigate(['education']);
  }

}
