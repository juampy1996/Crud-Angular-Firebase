import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service'
import { NgForm } from '@angular/forms';
import { Product } from '../../../models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor( private productService: ProductService ) { }

  ngOnInit() {
    this.productService.getProducts();
    this.resetForm();
  }

  onSubmit(productFormm: NgForm){
    this.productService.insertProduct(productFormm.value);
    this.resetForm(productFormm);
  }

  resetForm(productFormm?: NgForm){
    if(productFormm != null){
      productFormm.reset(); 
      this.productService.selectedProduct = new Product();
    }
  }
}
