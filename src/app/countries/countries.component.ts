import { Component, OnInit } from '@angular/core';
import { CountryService } from '../country.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css'],
  providers:[Location]
  
})
export class CountriesComponent implements OnInit {

  

  currentCountryCurrency: any;
  countries: any;
  currentCountry: any;
  constructor(
    private countryService : CountryService,
    private _route: ActivatedRoute, 
    private router: Router,
    private location : Location
  ) { }

  ngOnInit() {

    let myRegion = this._route.snapshot.paramMap.get('regions');

    this.countryService.getSingleRegionInformation(myRegion).subscribe(
      data => {
   
        this.currentCountry = data
      
      },

      error =>{

       console.log("some error occured");
       console.log(error.errorMessage)

      }
    )
  }

  public goBackToPreviousPage(): any {
    this.location.back();
  }

}
