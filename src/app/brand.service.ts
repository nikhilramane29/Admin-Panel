import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  url = "http://localhost:8080/brand"

  constructor(
    private httpClient: HttpClient) { }

  getBrands() {
    //add token in the request header
    const httpOptions = {
    headers:  new HttpHeaders({
    token: sessionStorage['token']
    })
  };
      return this.httpClient.get(this.url, httpOptions)
    }

  }
