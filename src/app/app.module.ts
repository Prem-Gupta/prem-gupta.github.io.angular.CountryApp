import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClient} from '@angular/common/http';

import { HttpClientModule } from '@angular/common/http';
import {RouterModule,Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { CountriesComponent } from './countries/countries.component';
import { CountryComponent } from './country/country.component';
import { RegionComponent } from './region/region.component';
import { CountryService } from './country.service';
import { CurrencyComponent } from './currency/currency.component';
import { LanguageComponent } from './language/language.component';

@NgModule({
  declarations: [
    AppComponent,
    CountriesComponent,
    CountryComponent,
    RegionComponent,
    CurrencyComponent,
    LanguageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path :'region', component: RegionComponent},
      {path:'', redirectTo:'region',pathMatch:'full'},
      {path :'region/:regions',component:CountriesComponent},
      {path :'name/:name',component:CountryComponent},
      {path :'currency/:name',component:CurrencyComponent},
      {path :'lang/:name',component:LanguageComponent}
    ])

  ],
  providers: [CountryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
