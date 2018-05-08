import { Component, OnInit } from '@angular/core';
import { CountryService } from '../country.service';
import { error } from 'protractor';
@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent implements OnInit {

  
  allRegions:any = [] ;
    constructor(
    private regionService : CountryService
  ) { }

  ngOnInit() {

    this.regionService.getAllRegion().subscribe(
      data => {
        this.allRegions = this.regionService.getRegions(data);
        console.log(this.allRegions);
      },

      error =>{

       console.log("some error occured");
       console.log(error.errorMessage)

      }
    )
  }

  

  }

