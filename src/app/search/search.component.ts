import { Target } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  searchValue : string ='iphone'
  changeValue(eventData : Event){
    console.log((<HTMLInputElement>eventData.target).value)
    this.searchValue = ((<HTMLInputElement>eventData.target).value)
  }
}
