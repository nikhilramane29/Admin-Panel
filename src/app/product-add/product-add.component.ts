import { BrandService } from './../brand.service';
import { CategoryService } from './../category.service';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  categories= []
  brands = []

  title = ''
  description = ''
  price = 0
  category = 1
  brand = 1
  
product= null

  constructor(
    private router: Router,
    private categoryService: CategoryService,
    private brandService: BrandService,
    private activatedRoute: ActivatedRoute,
    private productService: ProductService) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.queryParams['id']
    if (id) {
      //edit product
      this.productService
      .getProductDetails(id)
      .subscribe(response =>{
        if(response['status'] == 'success') {
          const products = response['data']
          if (products.length > 0) {
             this.product =products[0]
            this.title = this.product['title']
            this.description = this.product['description']
            this.price = this.product['price']
            this.category = this.product['category']['id']
            this.brand = this.product['brand']['id']
            
          }
        }
      })
    }

    this.loadBrands()
    this.loadCategories()
  }

  loadCategories() {
    this.categoryService
    .getCategories()
    .subscribe(response => {
      if (response['status'] == 'success'){
        this.categories = response['data']
      }
  })
  }

  loadBrands() {
    this.brandService
    .getBrands()
    .subscribe(response => {
      if (response['status'] == 'success'){
        this.brands = response['data']
      }
  })
  }

onUpdate() {

  if(this.product) {
    //edit
    this.productService
  .updateProduct(this.product['id'],this.title,this.description,this.price,this.category,this.brand)
  .subscribe(response =>{
    if(response['status'] == 'success') {
      this.router.navigate(['/product-list'])
       }
    })
  } else {
      //insert
      this.productService
  .insertProduct(this.title,this.description,this.price,this.category,this.brand)
  .subscribe(response =>{
    if(response['status'] == 'success') {
      this.router.navigate(['/product-list'])
       }
    })
  }
  
}

onUploadImage() {
  this.router.navigate(['/product-upload-image'], {queryParams: {id: this.product['id']}})
}
}
