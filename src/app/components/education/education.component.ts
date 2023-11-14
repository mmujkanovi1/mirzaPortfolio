import { Component, OnInit } from '@angular/core';


interface EventItem {
  status?: string;
  date?: string;
  icon?: string;
  color?: string;
  image?: string;
}


@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  events: EventItem[];
  eventsHorizontal: string[];

  constructor() {
    this.eventsHorizontal = [
      "2020", "2021", "2022", "2023"
  ];
    this.events = [
      { status: 'Medical High School', date: '2014', icon: 'pi pi-shopping-cart', color: '#9C27B0', image: 'game-controller.jpg' },
      { status: 'Facultaty of electrical engineur- bachelor', date: '2018', icon: 'pi pi-cog', color: '#673AB7' },
      { status: 'Facultaty of electrical engineur- master', date: '2021', icon: 'pi pi-shopping-cart', color: '#FF9800' },
     // { status: '', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#607D8B' }
  ];
   }

  ngOnInit(): void {
  }

}
