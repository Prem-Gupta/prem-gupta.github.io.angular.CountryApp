import { Component, OnInit } from '@angular/core';
import { CountryService } from '../country.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css'],
  providers:[Location]
})
export class CountryComponent implements OnInit {

  currentCountry: any;
  constructor(
    private countryService : CountryService,
    private _route: ActivatedRoute, 
    private router: Router,
    private location : Location
  ) { }

  ngOnInit() {
    let myCountry = this._route.snapshot.paramMap.get('name');

    this.countryService.getSingleCountryInformation(myCountry).subscribe(
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
  
  


