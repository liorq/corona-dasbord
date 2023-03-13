import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AnchorListComponent } from './components/anchor-list/anchor-list.component';
import { ViewOnComponent } from './components/view-on/view-on.component';
import { CardsComponent } from './components/cards-list/cards-list.component';
import { SummaryOf7DaysComponent } from './components/summary-of7-days/summary-of7-days.component';
import { MajorIndicatorsComponent } from './components/major-indicators/major-indicators.component';
import { GenericTableComponent } from './components/generic-table/generic-table.component';
import { IndicesOfGeneralMorbidityComponent } from './components/indices-of-general-morbidity/indices-of-general-morbidity.component';
import { MorbidityAndHospitalizationsComponent } from './components/morbidity-and-hospitalizations/morbidity-and-hospitalizations.component';
import { MorbidityFromAbroadComponent } from './components/morbidity-from-abroad/morbidity-from-abroad.component';
import { EffectOfVaccinationOnMorbidityComponent } from './components/effect-of-vaccination-on-morbidity/effect-of-vaccination-on-morbidity.component';
import { SeriouslyillAndHospitalizedComponent } from './components/seriouslyill-and-hospitalized/seriouslyill-and-hospitalized.component';
import { DeadsComponent } from './components/deads/deads.component';
import { TestsComponent } from './components/tests/tests.component';
import { FurtherInvestigationsComponent } from './components/further-investigations/further-investigations.component';
import { RecurrentMorbidityAndRecoveryComponent } from './components/recurrent-morbidity-and-recovery/recurrent-morbidity-and-recovery.component';
import { VaccinationOfThePopulationComponent } from './components/vaccination-of-the-population/vaccination-of-the-population.component';
import { LightsInSettlementsComponent } from './components/lights-in-settlements/lights-in-settlements.component';
import { LinksListComponent } from './components/links-list/links-list.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { FormsModule } from '@angular/forms';
import { SideItemComponent } from './components/side-item/side-item.component';
import { CardLineComponent } from './components/card-line/card-line.component';
import { TableHeaderComponent } from './components/table-header/table-header.component';
import { TableHeaderTitleComponent } from './components/table-header-title/table-header-title.component';
import { CardHeaderComponent } from './components/card-header/card-header.component';
import { TableBodyComponent } from './components/table-body/table-body.component';
import { ColorSquaresComponent } from './components/color-squares/color-squares.component';

@NgModule({
  declarations: [
    AppComponent,

    HeaderComponent,
    AnchorListComponent,
    ViewOnComponent,
    CardsComponent,
    SummaryOf7DaysComponent,
    MajorIndicatorsComponent,

    GenericTableComponent,
    IndicesOfGeneralMorbidityComponent,
    MorbidityAndHospitalizationsComponent,
    MorbidityFromAbroadComponent,
    EffectOfVaccinationOnMorbidityComponent,
    SeriouslyillAndHospitalizedComponent,
    DeadsComponent,
    TestsComponent,
    FurtherInvestigationsComponent,
    RecurrentMorbidityAndRecoveryComponent,
    VaccinationOfThePopulationComponent,
    LightsInSettlementsComponent,
    LinksListComponent,
    SideNavComponent,
    SideItemComponent,
    CardLineComponent,
    TableHeaderComponent,
    TableHeaderTitleComponent,
    CardHeaderComponent,
    TableBodyComponent,
    ColorSquaresComponent,
  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
   FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [

  ]
})
export class AppModule { }
