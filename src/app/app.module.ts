import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { BrowserModule } from '@angular/platform-browser';
import { PanelModule } from 'primeng/panel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardModule } from 'primeng/card';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { ListboxModule } from 'primeng/listbox';
import { EducationComponent } from './components/education/education.component';
import { TimelineModule } from 'primeng/timeline';
import { ImageModule } from 'primeng/image';
import { ExperienceComponent } from './components/experience/experience.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ContactComponent } from './components/contact/contact.component';
import { AccordionModule } from 'primeng/accordion';
import { DividerModule } from 'primeng/divider';
import { DataViewModule } from 'primeng/dataview';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { TagModule } from 'primeng/tag';
import { RatingModule } from 'primeng/rating';
import { DialogModule } from 'primeng/dialog';
import { TabMenuModule } from 'primeng/tabmenu';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
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



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    EducationComponent,
    ExperienceComponent,
    ProjectsComponent,
    SkillsComponent,
    ContactComponent,
    SokopComponent,
    FactoringComponent,
    SasComponent,
    InfobiroComponent,
    MarketComponent,
    PortfolioComponent,
    XmlComponent,
    GenericComponent,
    SynonymComponent,
    BankappComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PanelModule,
    BrowserAnimationsModule,
    CardModule,
    SidebarModule,
    ButtonModule,
    ListboxModule,
    TimelineModule,
    ImageModule,
    AccordionModule,
    DividerModule,
    DataViewModule,
    InputTextModule,
    InputTextareaModule,
    TagModule,
    RatingModule,
    DialogModule,
    TabMenuModule,
    FontAwesomeModule,
    FormsModule,
    ToastModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
