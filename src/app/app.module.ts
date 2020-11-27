import { CategoryService } from './category.service';
import { BrandService } from './brand.service';
import { OrderService } from './order.service';
import { ProductService } from './product.service';
import { UserService } from './user.service';
import { AdminService } from './admin.service';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserListComponent } from './user-list/user-list.component';
import { ProductListComponent } from './product-list/product-list.component';
import { OrderListComponent } from './order-list/order-list.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductAddComponent } from './product-add/product-add.component';
import { UploadImageComponent } from './upload-image/upload-image.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    UserListComponent,
    ProductListComponent,
    OrderListComponent,
    LoginComponent,
    SignupComponent,
    ProductAddComponent,
    UploadImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
     AdminService,
     UserService,
     ProductService,
     OrderService,
     BrandService,
     CategoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
