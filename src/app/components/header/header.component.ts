import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

interface MenuItems {
  text: string;
  link: string;
  active: boolean;
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

  bntStyle: string;

  constructor(private router: Router) {
    this.bntStyle = 'btn-default';
  }

  ngOnInit() {
    this.menuItems = [
      { text: 'About', link: 'about', active: true },
      { text: 'Education', link: 'education', active: false },
      { text: 'Experience', link: 'experience', active: false },
      { text: 'Projects', link: 'projects', active: false },
      { text: 'Skills', link: 'skills', active: false },
      { text: 'Contact', link: 'contact' , active: false},
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


  changeStyle() {
    this.bntStyle = 'btn-change';

  }

}
