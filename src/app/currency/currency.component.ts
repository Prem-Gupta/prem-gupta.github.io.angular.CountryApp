import { Component, OnInit } from '@angular/core';
import { CountryService } from '../country.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css'],
  providers:[Location]
})
export class CurrencyComponent implements OnInit {


  currencyCountry: any;
  constructor(
    private countryService : CountryService,
    private _route: ActivatedRoute, 
    private router: Router,
    private location : Location
  ) { }

  ngOnInit() {

    let myRegionCurrency = this._route.snapshot.paramMap.get('name');
    console.log(myRegionCurrency)

    this.countryService.allSameCurrencyInformation(myRegionCurrency).subscribe(
      data => {
   
        this.currencyCountry = data
        console.log(this.currencyCountry)
      
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
