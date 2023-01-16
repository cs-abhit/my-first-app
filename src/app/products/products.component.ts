import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent {
  product = [
    {id:1 , name: "abhit ", address:"khrava" , clever:"yes" },
    {id:2 , name: "abhit2 ", address:"khrava2" , clever:"no" },
    {id:3 , name: "abhit3 ", address:"khrava3" , clever:"yes" },
    {id:4 , name: "abhit4 ", address:"khrava4" , clever:"no" }
  ]
}
