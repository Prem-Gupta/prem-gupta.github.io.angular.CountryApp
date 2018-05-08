import { Component, OnInit } from '@angular/core';
import { CountryService } from '../country.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css'],
  providers:[Location]
})
export class LanguageComponent implements OnInit {

 
  languageCountry: any;
  constructor(
    private countryService : CountryService,
    private _route: ActivatedRoute, 
    private router: Router,
    private location : Location
  ) { }

  ngOnInit() {
    let myRegionlanguage = this._route.snapshot.paramMap.get('name');
    console.log(myRegionlanguage)

    this.countryService.allSameLanguageInformation(myRegionlanguage).subscribe(
      data => {
   
        this.languageCountry = data
        console.log(this.languageCountry)
      
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


