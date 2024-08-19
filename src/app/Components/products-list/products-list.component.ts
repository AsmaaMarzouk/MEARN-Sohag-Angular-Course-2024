import { Component, OnInit } from '@angular/core';
import { Iproduct } from '../../Models/iproduct';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss',
})
export class ProductsListComponent implements OnInit {
  showOrhideImg: boolean = true;
  userName: string = 'Mahmoud';
  // product1: Iproduct = {
  //   id: 1,
  //   name: 'product1',
  //   price: 100,
  //   quantity: 5,
  //   Material: 'Metal',
  //   prdImgURL: '',
  //   categoryID: 1,
  // };

  // products: Iproduct[]=[{},{}]
  // categoryID => 1(table) , 2(chair) , 3(TV unit)
  productsList: Iproduct[];
  ProductsAfetrFilter:Iproduct[]=[];

  constructor() {
    // initialize products
    this.productsList = [
      {
        id: 1,
        name: 'Odense 8-Seater Top Dining Table',
        price: 21500,
        quantity: 0,
        PrdimgURL:
          'https://media.homecentre.com/i/homecentre/163650487-163650487-HC18082021_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
        categoryID: 1,
        Material: 'Engineered Wood',
      },
      {
        id: 5,
        name: 'Trixia 4-Seater Glass Top Dining Table',
        price: 30000,
        quantity: 1,
        PrdimgURL:
          'https://media.homecentre.com/i/homecentre/163645951-163645951-HC07102021_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
        categoryID: 1,
        Material: 'Metal',
      },
      {
        id: 25,
        name: 'Gasha Marble Top Side Table',
        price: 14000,
        quantity: 10,
        PrdimgURL:
          'https://media.homecentre.com/i/homecentre/160079085-160079085-HC020518_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
        categoryID: 1,
        Material: 'Metal',
      },
      {
        id: 7,
        name: 'Ventura Fabric Dining Chair',
        price: 1500,
        quantity: 2,
        PrdimgURL:
          'https://media.homecentre.com/i/homecentre/161257427-161257427-HC280119_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
        categoryID: 2,
        Material: 'Upholstered Seating',
      },
      {
        id: 17,
        name: 'Ventura Fabric Dining Chair',
        price: 1500,
        quantity: 2,
        PrdimgURL:
          'https://media.homecentre.com/i/homecentre/162640761-162640761-HC23092020_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
        categoryID: 2,
        Material: 'Upholstered Seating',
      },
      {
        id: 9,
        name: 'Boston Study Chair',
        price: 1000,
        quantity: 10,
        PrdimgURL:
          'https://media.homecentre.com/i/homecentre/159671547-159671547-HCB1226OCT17_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
        categoryID: 2,
        Material: 'Upholstered Seating',
      },
      {
        id: 10,
        name: 'Coby Extendable TV Unit',
        price: 13000,
        quantity: 0,
        PrdimgURL:
          'https://media.homecentre.com/i/homecentre/163723189-163568026-HC16082021_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
        categoryID: 3,
        Material: 'Wood',
      },
      {
        id: 15,
        name: 'Accent TV Unit',
        price: 36999,
        quantity: 4,
        PrdimgURL:
          'https://media.homecentre.com/i/homecentre/161684469-161684469-HC210519_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
        categoryID: 3,
        Material: 'MDF',
      },
      {
        id: 55,
        name: 'Plymouth TV Unit',
        price: 36999,
        quantity: 3,
        PrdimgURL:
          'https://media.homecentre.com/i/homecentre/163688823-163688823-HC05102021_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
        categoryID: 3,
        Material: 'wood',
      },
    ];
    // this.ProductsAfetrFilter=this.productsList;
    // console.log("hello constructor");

  }
  ngOnInit(): void {

    // console.log("hello oninit");

    // this.ProductsAfetrFilter=Array.from(this.productsList);
    this.ProductsAfetrFilter=this.productsList;

  }
  toggleImg() {
    this.showOrhideImg = !this.showOrhideImg;
  }

  set filterByName(value: string) {
    // console.log(value);
    // console.log(this.performFilter(value));
    this.ProductsAfetrFilter=this.performFilter(value);

  }

  performFilter(filtervalue: string): Iproduct[] {
    filtervalue = filtervalue.toLowerCase();
    return this.productsList.filter((prd: Iproduct) =>
      prd.name.toLowerCase().includes(filtervalue)
    );
  }
}
