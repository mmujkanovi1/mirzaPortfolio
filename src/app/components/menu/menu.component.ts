import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  model: any[] = [];

  isOpen = false;

  constructor() { }

  ngOnInit() {
    this.model = [
      {
        label: "", items: [
          {
            label: "Sifarnici", items: [
              { label: "Vrste ugovora", routerLink: ['/vrstaUgovora'] },
              { label: "Rok finansiranja", routerLink: ['/rokFinansiranja'] },
              { label: "Procenat finansiranja", routerLink: ['/procentFinansiranja'] },
              { label: "Pokriće prodavca", routerLink: ['/pokriceProdavca'] },
              { label: "Pokriće dužnika", routerLink: ['/pokriceDuznika'] },
              { label: "Tipovi kamate", routerLink: ['/tipKamate'] },
              { label: "Tipovi finansiranja", routerLink: ['/tipFinansiranja'] },
              { label: "Statusi", routerLink: ['/statusi'] },
              { label: "Platitelj naknade i kamate", routerLink: ['/platiteljNaknadeKamate'] },
              { label: "Platitelj zatezne kamate", routerLink: ['/platiteljZatezneKamate'] },
              { label: "Vrsta cesije", routerLink: ['/vrsteCesije'] },
              { label: "Tipovi dokumenata", routerLink: ['/tipDokumenta'] },
              { label: "Tipovi ugovora ", routerLink: ['/tipUgovora'] },
              { label: "Sporazumi", routerLink: ['/sporazumi'] },
              { label: "Razlog aneksa", routerLink: ['/razlogAneksa'] },
              { label: "Kreditni status", routerLink: ['/kreditniStatusi'] },
              { label: "Vrte posla za knjiženje", routerLink: ['/'] },
              { label: "Sema knjizenja", routerLink: ['/'] },
              { label: "ISP klasifikacija", routerLink: ['/ispKlasifikacija'] },
              { label: "ISP3 klasifikacija", routerLink: ['/isp3Klasifikacija'] },
              { label: "FEX klasifikacija", routerLink: ['/fexKlasifikacija'] },
              { label: "Komintenti", routerLink: ['/komintenti'] },
              { label: "Dobavljaci", routerLink: ['/dobavljaci'] },
              { label: "Vrste posla", routerLink: ['/vrstaPosla'] }
            ]
          },
          {
            label: "Aktivnosti", items: [
              { label: "Odluka/Ugovor/Cesija/Fakutra", routerLink: ['/evidentiranjeOdluke'] },
              { label: "Plaćanje faktura", routerLink: ['/pretragaPlacanjaFaktura'] },
              { label: "Procedure knjiženja", routerLink: ['procedureKnjizenja'] },
              { label: "Procedura za obračun klasifikacije", routerLink: ['/obracunKlasifikacije'] },
              { label: "JOB obrade", routerLink: ['/jobObrade'] },
            ]
          },
          {
            label: "Pregledi i Izvještaji", items: [
              { label: "Pregled Limita", routerLink: ['/pretragaOdluka'] },
              { label: "Redovna kamata za sve partije", routerLink: null },
              { label: "Zatezna kamata za sve partije", routerLink: null },
              {
                label: "Folderi", items: [
                  { label: "Proknjižene cesije - razgraničenja", routerLink: null },
                  { label: "Otvorene partije", routerLink: null },
                  { label: "Dospjele partije", routerLink: null },
                  { label: "Zatvorene partije", routerLink: null },
                ]
              },
              { label: "FACT stavke - EXCEL", routerLink: ['/factStavkeExcel'] },
              { label: "FAM stavke - EXCEL", routerLink: ['/famStavkeExcel'] },
              { label: "Naknade - EXCEL", routerLink: ['/factNaknadeExcel'] },
              { label: "Kamate - EXCEL", routerLink: ['/factKamateExcel'] },
              { label: "Neplaćene fakture - EXCEL", routerLink: ['/neplaceneFaktureExcel'] },
              { label: "Ročnost faktoringa - EXCEL", routerLink: null },
            ]
          },
          {
            label: "Prozor", items: [
              { label: "Kaskada", routerLink: null },
              { label: "Posloži", routerLink: null },
              { label: "Složi sličice", routerLink: null },
            ]
          },
          {
            label: "Logovi", items: [
              { label: "Fact Logovi", routerLink: ['/factLogovi'] },
            ]
          }
        ]
      }
    ];
  }

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  closeMenu() {
    this.isOpen = false;
  }

}
