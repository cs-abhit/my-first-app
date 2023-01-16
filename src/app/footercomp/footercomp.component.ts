import { Component } from '@angular/core';

@Component({
  selector: 'app-footercomp',
  templateUrl: './footercomp.component.html',
  styleUrls: ['./footercomp.component.css']
})
export class FootercompComponent {
  source : String = "/assets/483072.jpg"
  display : boolean= false
  
  closePic(){
    this.display = true
  }
}
