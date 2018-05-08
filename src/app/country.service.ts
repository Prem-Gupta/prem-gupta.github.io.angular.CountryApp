import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class CountryService {

  myResponse: any;
  public allRegions;
  public unique_array = [];
  public baseUrl ='https://restcountries.eu/rest/v2/';
  constructor(
    private _http: HttpClient
  ) { }

  public getAllRegion() : any {
     this.myResponse = this._http.get(this.baseUrl + 'all/')
      return this.myResponse;
  }

  public getRegions(myData) :any{
  
      for(let i = 0;i < myData.length; i++){
          if(this.unique_array.indexOf(myData[i].region) === -1){
              this.unique_array.push(myData[i].region)

          }
      }
      return this.unique_array;

  }

  public getSingleRegionInformation(currentRegion) :any {
    let myResponse = this._http.get(this.baseUrl+'region/'+currentRegion)
    return myResponse;

  }

public getSingleCountryInformation(currentCountry) : any {
  let myResponse = this._http.get(this.baseUrl+'name/'+currentCountry)
  return myResponse;
}

public allSameCurrencyInformation(currencyCountry) : any{

 let myResponse = this._http.get(this.baseUrl+'currency/'+currencyCountry)
 return myResponse;
}

public allSameLanguageInformation(currentLanguage) : any {
  let myResponse = this._http.get(this.baseUrl+'lang/'+currentLanguage)
  return myResponse;
}
}

