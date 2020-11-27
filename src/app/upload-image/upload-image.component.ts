import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})
export class UploadImageComponent implements OnInit {

  selectedFile = null
  

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    
  }
  onImageSelect(event) {
    this.selectedFile = event.target.files[0]

  }

  onUploadImage() {
    const id = this.activatedRoute.snapshot.queryParams['id']
    this.productService
    .uploadImage(id , this.selectedFile)
    .subscribe(response =>{
      if(response['status'] == 'success') {
       this.router.navigate(['/product-list'])
      } else {
        console.log(response['error'])
      }
  })
}
}
