import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { EducationComponent } from './components/education/education.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ContactComponent } from './components/contact/contact.component';
import { SokopComponent } from './components/projects/sokop/sokop.component';
import { FactoringComponent } from './components/projects/factoring/factoring.component';
import { SasComponent } from './components/projects/sas/sas.component';
import { InfobiroComponent } from './components/projects/infobiro/infobiro.component';
import { MarketComponent } from './components/projects/market/market.component';
import { PortfolioComponent } from './components/projects/portfolio/portfolio.component';
import { XmlComponent } from './components/projects/xml/xml.component';
import { GenericComponent } from './components/projects/generic/generic.component';
import { SynonymComponent } from './components/projects/synonym/synonym.component';
import { BankappComponent } from './components/projects/bankapp/bankapp.component';

const routes: Routes = [
  //{ path: '', component: AboutComponent },
  {path: '', redirectTo: 'about', pathMatch: 'full'},
  { path: 'about', component: AboutComponent },
  { path: 'education', component: EducationComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'projects/sokop', component: SokopComponent },
  { path: 'projects/factoring', component: FactoringComponent },
  { path: 'projects/sas', component: SasComponent },
  { path: 'projects/infobiro', component: InfobiroComponent },
  { path: 'projects/market', component: MarketComponent },
  { path: 'projects/portfolio', component: PortfolioComponent },
  { path: 'projects/xml', component: XmlComponent },
  { path: 'projects/generic', component: GenericComponent },
  { path: 'projects/synonym', component: SynonymComponent },
  { path: 'projects/bankapp', component: BankappComponent }
];

//imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top', anchorScrolling: 'enabled' })],

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
